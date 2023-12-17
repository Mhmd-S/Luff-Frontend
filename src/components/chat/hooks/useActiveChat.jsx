import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import chatAPI from '../../../api/chatAPI';
import { useAuth } from '../../../contexts/useAuthContext';
import { socket } from '../../../socket-io/socket';
import MessageUser from '../MessageUser';
import { generateUUID } from '../../../utils/uuid';
import MessageContact from '../MessageContact';
import { useNotification } from '../../../contexts/useNotificationContext';
import ReportUser from '../../common/ReportUser';
import BlockUser from '../../common/BlockUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHand } from '@fortawesome/free-solid-svg-icons';
import LoadingIcon from '../../icons/LoadingIcon';
import { set } from 'react-hook-form';

// Thinking about making the fetch chat directly populat the chat and removing the message state.

const useChatActive = (chatId, recipient, setChatId, setRecipient) => {
	const [messages, setMessages] = useState([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(true);
	const [stopFetching, setStopFetching] = useState(false);
	const [showSmallModal, setShowSmallModal] = useState(0); // 0: none, 1: block, 2: flag
	const [showChatMenu, setShowChatMenu] = useState(false);
	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(false);
	const [chatHeight, setChatHeight] = useState(0); // Will be used to keep the scroll in the same position
	const [showUserInfo, setShowUserInfo] = useState(true);

	// Refs
	const topRef = useRef(null); // Use for infinite scrolling
	const bottomRef = useRef(null); // Use for scrolling to the bottom
	const chatWindowRef = useRef(null); // Use for scrolling to the bottom

	// Contexts
	const { user, getUserInfo } = useAuth();
	const { removeNotification } = useNotification();

	// Reset the messages when the recipient changes
	useEffect(() => {
		if (messages.length > 0) {
			setMessages([]);
			setPage(1);
			setStopFetching(false);
		}
	}, [recipient]);

	// Reset the messages when the chatId changes
	useEffect(() => {
		// Setup sockets
		if (user.blockedUsers.includes(recipient._id)) {
			setDisabled(true);
			return;
		} else {
			setDisabled(false);
		}

		socket.on('receive-message', handleRecieveMessage);
		socket.on('sent-message', handleSentMessage);	

		// The code below for requesting older messages and integrating with the scroll
		const topOfChat = topRef.current;

		const options = {
			root: chatWindowRef.current,
			rootMargin: '400px',
			threshold: 1.0,
		};

		// Whenever the view of the top of the chat is intersecting with the user's view, fetch more messages
		const observer = new IntersectionObserver(async ([entry]) => {
			if (entry.isIntersecting) {
				if (stopFetching) {
					return;
				}
				await fetchChat();
			}
		}, options);

		if (topOfChat) {
			observer.observe(topOfChat);
		}

		return () => {
			observer.disconnect();
			socket.off('receive-message', handleRecieveMessage);
			socket.off('sent-message', handleSentMessage);
		};
	}, [stopFetching, page, messages]);

	// Used to adapt the scroll position when messages are added
	useLayoutEffect(() => {
		socket.on('sent-message', () => {
			bottomRef.current?.scrollIntoView({ behavior: 'instant' });
		});

		if (page == 2 && messages.length > 0) {
			bottomRef.current?.scrollIntoView({ behavior: 'instant' });
		}

		// Keep scroll in the same position
		const chatWindow = chatWindowRef.current;

		if (page > 2 && chatWindow) {
			// Get the new height of the chat
			const newChatHeight = chatWindow.scrollHeight;
			// Scroll to the same position by subtracting the new height from the old height
			chatWindow.scrollTop = newChatHeight - chatHeight + 400;
		}

		// Update the chat height to be used by the next render
		setChatHeight(chatWindow.scrollHeight);

		return () => {
			socket.off('sent-message');
		};
	}, [messages]);

	const handleRecieveMessage = (data) => {
		if (data.chatId !== chatId) {
			return;
		}

		handleReadMessage(data._id);

		// To help with rendering the message
		data.senderId = data.sender._id;

		// Set the new message in the messages
		setMessages((prevMessages) => [...prevMessages, data]);
		removeNotification();
	};

	const handleSentMessage = (data) => {
		setMessages((prevMessages) => [...prevMessages, data]);
	};

	const handleReadMessage = (messageId) => {
		socket.emit('read-message', {
			messageId: messageId,
		});
	};

	const fetchChat = async () => {
		if (stopFetching || !recipient || !chatId) {
			return;
		}

		setLoading(true);

		const res = await chatAPI.getChat(chatId, page);

		// If there is an error
		if (res.status !== 200) {
			setError(
				<div className="p-2 text-center h-full flex flex-col justify-center items-center">
					A problem was encounterd. Try again later
				</div>
			);
			setLoading(false);
			return;
		}

		if (error) {
			setError(null);
		}

		const { messages } = res.data.data || {};

		// If there are no messages, stop future fetching
		if (!messages) {
			setLoading(false);
			setStopFetching(true);
			return;
		}

		// If the number of messages is less than 20, stop future fetching
		if (messages.length < 30) {
			setLoading(false);
			setStopFetching(true);
		}

		// Update message to seen if the last message is not seen by the user
		for (const mesg in messages) {
			if (!messages[mesg].seenBy.includes(user._id)) {
				handleReadMessage(messages[mesg]._id);
				removeNotification();
			}
		}

		setPage((prevPage) => prevPage + 1);
		setMessages((prevMessages) => [...messages, ...prevMessages]);
		setLoading(false);
	};

	// Factory function to populate the messages
	const populateMessages = () => {
		let messagesElements = [];
		let messagesReversed = [...messages];

		if (messages.length > 0) {
			messagesElements = messagesReversed.map((message) => {
				if (message.senderId === user._id) {
					return <MessageUser key={message._id} message={message} />;
				} else {
					return (
						<MessageContact key={message._id} message={message} />
					);
				}
			});
		} else {
			// Todo: this shows when the user sends messages through the chat for the first time
			messagesElements.push(
				<li className="w-full h-full p-2 flex flex-col items-center justify-center text-lg font-semibold text-purple-500">
					Be the first to send a message!
					<div className="animate-[wave_10s_linear_infinite]">
						<FontAwesomeIcon icon={faHand} className="text-3xl" />
					</div>
				</li>
			);
		}

		messagesElements.push(<div key={generateUUID()} ref={bottomRef} />);
		return messagesElements;
	};

	const renderMessagesBody = () => {
		return (
			<ul
				className="w-full h-full bg-[#fafafc] p-2 text-sm overflow-y-scroll scrollbar:bg-blue-500 scrollbar scrollbar-thumb-blue-500 scrollbar-track-gray-200"
				ref={chatWindowRef}
			>
				<li ref={topRef}></li>
				{error && (
					<li className="w-full p-2 flex items-center justify-center">
						{error}
					</li>
				)}
				{loading && (
					<li className="w-full p-2 flex items-center justify-center">
						<LoadingIcon />
					</li>
				)}
				{page !== 1 && populateMessages()}
				<li ref={bottomRef}></li>
			</ul>
		);
	};

	const resetChatState = () => {
		setShowSmallModal(0);
		setShowChatMenu(false);
		setChatId(null);
		setRecipient(null);
		setMessages([]);
		setLoading(false);
		setError(null);
		setStopFetching(false);
		setDisabled(false);
		getUserInfo();
	};

	const renderSmallModal = () => {
		if (showSmallModal === 1) {
			return (
				<ReportUser
					showReportUser={showSmallModal}
					setShowReportUser={setShowSmallModal}
					reportUserId={recipient._id}
					reset={resetChatState}
				/>
			);
		} else if (showSmallModal === 2) {
			return (
				<BlockUser
					showBlockUser={showSmallModal}
					setShowBlockUser={setShowSmallModal}
					blockUserId={recipient._id}
					reset={resetChatState}
				/>
			);
		} else {
			return undefined;
		}
	};

	return {
		renderMessagesBody,
		renderSmallModal,
		setShowSmallModal,
		setShowChatMenu,
		setShowUserInfo,
		showUserInfo,
		showChatMenu,
		loading,
		error,
		topRef,
		bottomRef,
		chatWindowRef,
		disabled,
	};
};

export default useChatActive;
