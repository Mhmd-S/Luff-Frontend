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

	return (
		<div className="w-full h-full flex items-center justify-center relative">
			<div
				className={`w-full h-full grid grid-rows-[10%_77%_13%] grid-cols-1 md:w-6/12 md:h-[85%] md:shadow-lg md:rounded-lg transition-all ease-in-out ${
					showUserInfo
						? 'md:absolute md:translate-x-[-30%] md:rounded-r-none'
						: 'md:absolute md:translate-x-[5%]'
				}`}
			>
				{/* Chat header */}
				<div className="w-full h-full flex bg-white items-center justify-between py-6 px-2 border-b-2 md:rounded-t-md">
					<FontAwesomeIcon
						icon={faChevronLeft}
						className="text-2xl text-[#a168ff] cursor-pointer"
						onClick={() => {
							setRecipient(null);
							setChatId(null);
						}}
					/>

					<div className="w-full flex items-center pl-4">
						<div className="w-12 h-12 rounded-full overflow-hidden border-2 md:w-10 md:h-10">
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
			</div>
			<UserInfo
				userInfo={recipient}
				setShowSmallModal={setShowSmallModal}
				showUserInfo={showUserInfo}
				setShowUserInfo={setShowUserInfo}
			/>
			{/* Flag modal */}
			{renderSmallModal()}
		</div>
	);
};

export default ActiveChat;
