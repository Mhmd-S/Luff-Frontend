import React from 'react';
import { convertDateShort } from '../../utils/Utils';

const MessageContact = ({ message }) => {
	return (
		<div
			key={message._id}
			className="max-w-[90%] text-[#023c64] flex flex-col  items-start p-2"
		>
			<div className="text-[0.7rem] text-[#d3d3d4] ">
				{convertDateShort(message.createdAt)}
			</div>
			<div className="max-w-full text-[1rem] break-words bg-white shadow-md font-semibold px-5 py-3 self-start rounded-lg">
				{message.content}
			</div>
		</div>
	);
};

export default MessageContact;
