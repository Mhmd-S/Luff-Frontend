import React from 'react';
import { convertDateLong } from '../../utils/Utils';
import useContact from './hooks/useContact';

const Contact = ({ chat, contactInfo, setChatId, setRecipient }) => {
	const { user } = useContact();

	return (
		<div
			className="w-full h-24 px-2 grid grid-cols-[20%_80%] items-center border-b border-[#e4e6e8] cursor-pointer hover:bg-[#f5f5f5] md:h-20"
			onClick={() => {
				setRecipient(contactInfo);
				setChatId(chat._id);
			}}
		>
			{/* Profile Pic */}
			<div className="w-14 h-14 rounded-full overflow-hidden border-2">
				<img
					src={contactInfo.profilePictures[0]}
					alt="logo"
					className="h-full w-full object-cover object-center"
				/>
			</div>

			<div className="w-full h-full flex flex-col justify-center">
				{/* Name and Date */}
				<div className="w-full flex justify-between">
					<p className="text-md font-bold overflow-hidden truncate">
						{contactInfo.name}
					</p>
					<p className="text-[0.85rem] md:text-[0.7rem] p-1">
						{chat?.lastMessage &&
							convertDateLong(chat.lastMessage.updatedAt)}
					</p>
				</div>

				{/* Last Message */}
				<div className="w-full text-[#71768b] flex justify-between overflow-hidden truncate md:text-sm">
					<p className="overflow-hidden truncate w-[90%]">
						{chat?.lastMessage
							? chat.lastMessage.content
							: `You have been matched with ${contactInfo.name}`}
					</p>
					{!chat?.lastMessage?.seenBy.includes(user._id) && (
						<span className="w-4 h-4 rounded-full inline-block bg-sky-500 animate-pulse"></span>
					)}
				</div>
			</div>
		</div>
	);
};

export default Contact;
