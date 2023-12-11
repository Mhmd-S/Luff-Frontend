import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import chatAPI from '../../../api/chatAPI';
import { useAuth } from '../../../contexts/useAuthContext';
import { socket } from '../../../socket-io/socket';
import MessageUser from '../MessageUser';
import { generateUUID } from '../../../utils/uuid';
import MessageContact from '../MessageContact';
import { useNotification } from '../../../contexts/useNotificationContext';
import { userAPI } from '../../../api/userAPI';

const useChatActive = (chatId, recipient, setChatId, setRecipient) => {
	const [messages, setMessages] = useState([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(true);
	const [stopFetching, setStopFetching] = useState(false);
	const [showSmallModal, setShowSmallModal] = useState(0); // 0: none, 1: block, 2: flag
	const [showChatMenu, setShowChatMenu] = useState(false);
	const [error, setError] = useState(null);

	// Refs
	const topRef = useRef(null);
	const bottomRef = useRef(null);
	const chatWindowRef = useRef(null);

	// Contexts
	const { user } = useAuth();
	const { setNotification, removeNotification } = useNotification();

	// Reset the messages when the chatId changes
	useEffect(() => {
		// Setup sockets
		socket.on('receive-message', handleRecieveMessage);
		socket.on('sent-message', handleSentMessage);

		const topOfChat = topRef.current;

		const options = {
			root: chatWindowRef.current,
			rootMargin: '300px',
			threshold: 0.5,
		};

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
			observer.disconnect(),
				socket.off('receive-message', handleRecieveMessage);
			socket.off('sent-message', handleSentMessage);
		};
	}, [chatId, recipient, page, stopFetching]);

	useLayoutEffect(() => {
		if (
			page === 2 ||
			messages[messages.length - 1]?.senderId === user._id
		) {
			// Scroll to the bottom instantly when page is 2
			bottomRef.current?.scrollIntoView({ behavior: 'instant' });
		} else {
			// Keep scroll in the same position
			const chatWindow = chatWindowRef.current;

			if (chatWindow) {
				const currentScrollTop = chatWindow.scrollTop;

				// Calculate the new scroll position based on the current scroll top
				const newScrollTop =
					topRef.current?.offsetTop + bottomRef.current?.offsetHeight;

				// Set the scroll position
				chatWindow.scrollTo({ top: newScrollTop, behavior: 'smooth' });

				// Restore the original scroll position if needed
				chatWindow.scrollTop = currentScrollTop;
			}
		}
	}, [page, messages]);

	const handleRecieveMessage = (data) => {
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

		// If there are no messages, stop future fetching
		if (!res.data.data?.messages) {
			setLoading(false);
			setStopFetching(true);
			return;
		}

		// If the number of messages is less than 20, stop future fetching
		if (res.data.data.messages.length < 30) {
			setLoading(false);
			setStopFetching(true);
		}

		// Update message to seen if the last message is not seen by the user
		for (const mesg in res.data.data.messages) {
			if (!res.data.data.messages[mesg].seenBy.includes(user._id)) {
				handleReadMessage(res.data.data.messages[mesg]._id);
				removeNotification();
			}
		}

		setPage((prevPage) => prevPage + 1);
		setMessages((prevMessages) => [
			...res.data.data.messages,
			...prevMessages,
		]);
		setLoading(false);
	};

	// Factory function to populate the messages
	const populateMessages = () => {
		let messagesElements = [];
		let messagesReversed = [...messages];

		if (messages.length > 0) {
			messagesElements = messagesReversed.map((message, index) => {
				if (message.senderId === user._id) {
					return <MessageUser key={message._id} message={message} />;
				} else {
					return (
						<MessageContact key={message._id} message={message} />
					);
				}
			});
		}

		messagesElements.push(<div key={generateUUID()} ref={bottomRef} />);

		return messagesElements;
	};

	const handleBlockUser = async () => {
		const res = await userAPI.blockUser(recipient._id);

		if (res.data.status == 'success') {
			setNotification('User has been blocked');
		} else {
			setNotification('Something went wrong. Try again later');
		}

		setShowSmallModal(0);
		setShowChatMenu(false);
		setChatId(null);
		setRecipient(null);
	};

	const handleReportUser = async () => {};

	return {
		populateMessages,
		setShowSmallModal,
		setShowChatMenu,
		handleBlockUser,
		handleReportUser,
		showChatMenu,
		showSmallModal,
		topRef,
		bottomRef,
		chatWindowRef,
		loading,
	};
};

export default useChatActive;

// Find the suitable ratio of messages and scroll root margin
