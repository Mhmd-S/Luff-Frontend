import React from 'react';
import useActiveChat from './hooks/useActiveChat';
import LoadingIcon from '../icons/LoadingIcon';
import MessageField from './MessageField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import MiniMenu from '../common/MiniMenu';

const ChatWindow = ({ setRecipient, setChatId, chatId, recipient }) => {
	const {
		populateMessages,
		renderSmallModal,
		setShowSmallModal,
		setShowChatMenu,
		showChatMenu,
		loading,
		error,
		topRef,
		bottomRef,
		chatWindowRef,
		disabled,
	} = useActiveChat(chatId, recipient, setChatId, setRecipient);

	return (
		<div className="relative w-full h-full grid grid-rows-[10%_77%_13%] grid-cols-1  md:shadow-lg md:rounded-md md:w-2/5">
			<div className="w-full h-full flex bg-white items-center justify-between py-6 px-2 border-b-2 md:rounded-t-md">
				<button
					className="w-fit h-full p-3 flex flex-row items-center"
					onClick={() => {
						setRecipient(null);
						setChatId(null);
					}}
				>
					<FontAwesomeIcon
						icon={faChevronLeft}
						className="text-2xl text-[#a168ff]"
					/>
				</button>

				<div className="w-full flex items-center pl-4">
					<div className="w-12 h-12 rounded-full overflow-hidden border-2">
						<img
							src={recipient.profilePictures[0]}
							alt="logo"
							className="h-full w-full object-cover object-center"
						/>
					</div>
					<p className="p-4 text-lg font-semibold text-[#023c64]">
						{recipient.name}
					</p>
				</div>

				<MiniMenu
					showMiniMenu={showChatMenu}
					setShowMiniMenu={setShowChatMenu}
					disabled={disabled}
					menuItems={[
						{
							text: 'Report User',
							onClick: () => setShowSmallModal(1),
						},
						{
							text: 'Block User',
							onClick: () => setShowSmallModal(2),
						},
					]}
				/>
			</div>

			{disabled ? (
				<div className="w-full h-full flex items-center justify-center bg-[#fafafc]">
					<p className="text-lg font-semibold text-[#023c64]">
						You have blocked this user
					</p>
				</div>
			) : (
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
					{populateMessages()}
					{loading && (
						<li className="w-full p-2 flex items-center justify-center">
							<LoadingIcon />
						</li>
					)}
					<li ref={bottomRef}></li>
				</ul>
			)}

			{/* Text box to write message */}
			<MessageField chatId={chatId} recipient={recipient} />

			{/* Flag modal */}
			{renderSmallModal()}
		</div>
	);
};

export default ChatWindow;
