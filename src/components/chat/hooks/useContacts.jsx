import { useEffect, useState, useRef } from 'react';
import chatAPI from '../../../api/chatAPI';
import { useAuth } from '../../../contexts/useAuthContext';
import { socket } from '../../../socket-io/socket';
import Contact from '../Contact';
import LoadingIcon from '../../icons/LoadingIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const useContacts = (setChatId, setRecipient, currentChatId) => {
	const [chats, setChats] = useState([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);
	const [stopFetching, setStopFetching] = useState(false);
	const [error, setError] = useState(null);

	const { user } = useAuth();

	const containerRef = useRef(null);

	// Initail fetch and setting up
	useEffect(() => {
		if (!user) {
			return;
		}
		// Fetch chats on mount
		fetchChats();

		// Listen for new messages
		socket.on('receive-message', handleSocketMessage);
		socket.on('sent-message-contacts', handleSocketMessage);
		socket.on('match', handleSocketMatch);

		// Cleanup
		return () => {
			socket.off('sent-message', handleSocketMessage);
			socket.off('receive-message', handleSocketMessage);
			socket.off('match', handleSocketMatch);
		};
	}, [user]);

	// Setting up the intersection observer
	useEffect(() => {
		const container = containerRef.current;

		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.1,
		};

		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting && !stopFetching) {
				fetchChats();
			}
		}, options);

		if (container) {
			observer.observe(container);
		}

		return () => {
			observer.disconnect();
		};
	}, [chats, stopFetching]);

	// Handle the response from the fetch request
	const handleFetchResponse = (res) => {
		if (res == null) {
			return;
		}

		if (res.status !== 200) {
			setError('A problem was encountered. Try again later');
			return;
		}

		setError(null);

		if (res.data.data.length === 0) {
			setStopFetching(true);
		} else {
			setPage(page + 1);
			setChats([...chats, ...res.data.data]);
		}
	};

	// Fetch chats
	const fetchChats = async () => {
		const res = await chatAPI.getChats(page);

		setLoading(true);
		handleFetchResponse(res);
		setLoading(false);
	};

	// Handle socket messages
	const handleSocketMessage = (data) => {
		const { chatId, sender, recipient, content, createdAt } = data;

		// Search if the chat is in the chats array
		setChats((prevChats) => {
			const chatIndex = prevChats.findIndex(
				(chat) => chat._id === chatId
			);

			const chatIsOpen = currentChatId === chatId;
			console.log(chatIsOpen);
			// If the chat is open, the message is seen by both users
			const newSeenBy = chatIsOpen
				? [sender._id, recipient._id]
				: [sender._id];

			// Creates a new objects with the updated last message
			const updatedChat = {
				_id: chatId,
				participants: [sender, recipient],
				lastMessage: {
					content: content,
					seenBy: newSeenBy,
					updatedAt: createdAt,
				},
			};

			// Deletes the old chats position in the contacts array
			if (chatIndex !== -1) {
				prevChats.splice(chatIndex, 1);
			}

			// Inserts the chat in the beggining of the array
			prevChats.unshift(updatedChat);

			return [...prevChats];
		});
	};

	const handleSocketMatch = (data) => {
		setChats((prevChats) => {
			const { chatId, sender, recipient } = data;

			const updatedChat = {
				_id: chatId,
				participants: [sender, recipient],
				lastMessage: null,
			};

			prevChats.unshift(updatedChat);

			return [...prevChats];
		});
	};

	// Populate chats
	const populateChats = () => {
		if (error) {
			return (
				<div className="p-2 text-center h-full flex flex-col justify-center items-center">
					{error}
				</div>
			);
		}

		// Add animation here
		if (chats.length === 0) {
			return (
				<div className="p-4 text-center h-full flex flex-col justify-evenly items-center text-gray-500">
					<div className='relative w-full'>
						<FontAwesomeIcon
							icon={faComment}
							className="text-7xl absolute translate-x-[-25%] translate-y-[-25%] left-[35%] top-5"
						/>
						<FontAwesomeIcon
							icon={faComment}
							className="text-7xl scale-x-[-1] absolute translate-x-[-25%] translate-y-[-25%] left-1/2 text-purple-500"
						/>
					</div>
					<div>
						<p className='font-bold'>Swipe. Match. Chat.</p>
						<p>It is that easy!</p>
						<p>
							You will see your matches and chats here once you
							get a match.
						</p>
					</div>
				</div>
			);
		}

		const chatsEle = chats.map((chat) => {
			// Looks for the sender which is found in the participants array as an user object.
			const contactInfo =
				chat.participants[0]?._id === user._id
					? chat.participants[1]
					: chat.participants[0];

			return (
				<Contact
					key={chat._id}
					chat={chat}
					contactInfo={contactInfo}
					setRecipient={setRecipient}
					setChatId={setChatId}
				/>
			);
		});

		return (
			<div className="w-full h-full overflow-y-auto">
				{chatsEle}

				{loading && (
					<div className="p-2 text-center">
						<LoadingIcon />
					</div>
				)}

				<div
					ref={containerRef}
					className="border-[1px] border-transparent"
				></div>
			</div>
		);
	};

	return {
		chats,
		loading,
		error,
		containerRef,
		populateChats,
	};
};

export default useContacts;
