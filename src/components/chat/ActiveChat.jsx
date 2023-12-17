import React from 'react';
import useActiveChat from './hooks/useActiveChat';
import MessageField from './MessageField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import UserInfo from './UserInfo';

const ActiveChat = ({ setRecipient, setChatId, chatId, recipient }) => {
	const {
		renderMessagesBody,
		renderSmallModal,
		setShowSmallModal,
		setShowUserInfo,
		showUserInfo,
		disabled,
	} = useActiveChat(chatId, recipient, setChatId, setRecipient);

	// Todo: Make the userinfo open default on desktop and aslo added to mobile, do some clean up

	return (
		<div className="w-full h-full flex items-center justify-center relative">
			<div
				className={`w-full h-full grid grid-rows-[10%_77%_13%] grid-cols-1 md:w-2/5 md:h-[95%] md:shadow-lg md:rounded-l-lg md:rounded-r-none transition-all ease-in-out ${
					showUserInfo
						? 'md:absolute md:translate-x-[-45%]'
						: 'md:absolute md:translate-x-[5%]'
				}`}
			>
				{/* Chat header */}
				<div className="w-full h-full flex bg-white items-center justify-between py-6 px-2 border-b-2 md:rounded-tl-md">
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
						<p className="p-4 text-md font-semibold text-[#023c64]">
							{recipient.name}
						</p>
					</div>

					{/* <MiniMenu
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
					/> */}
					<FontAwesomeIcon
						icon={faInfoCircle}
						className={`text-2xl text-[#a168ff] cursor-pointer ${
							showUserInfo || disabled ? 'hidden' : ''
						}`}
						onClick={() => setShowUserInfo(true)}
					/>
				</div>

				{disabled ? (
					<div className="w-full h-full flex items-center justify-center bg-[#fafafc]">
						<p className="text-lg font-semibold text-[#023c64]">
							You have blocked this user
						</p>
					</div>
				) : (
					renderMessagesBody()
				)}

				{/* Text box to write message */}
				<MessageField
					chatId={chatId}
					recipient={recipient}
					disabled={disabled}
				/>

				{/* Flag modal */}
				{renderSmallModal()}
			</div>
			<UserInfo
				userInfo={recipient}
				setShowSmallModal={setShowSmallModal}
				showUserInfo={showUserInfo}
				setShowUserInfo={setShowUserInfo}
			/>
		</div>
	);
};

export default ActiveChat;
