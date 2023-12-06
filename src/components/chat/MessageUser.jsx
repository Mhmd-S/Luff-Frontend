import React from 'react';
import { convertDateShort } from '../../utils/Utils';

const MessageUser = ({ message }) => {
	return (
		<div
			key={message._id}
			className="max-w-[90%] text-white flex flex-col items-end ml-[15%] p-2"
		>
			<div className="text-[0.7rem] text-[#d3d3d4]">
				{convertDateShort(message.createdAt)}
			</div>
			<div className="max-w-full text-[1rem] break-words bg-[#a168ff] px-5 py-3 self-end rounded-lg">
				{message.content}
			</div>
		</div>
	);
};

export default MessageUser;
