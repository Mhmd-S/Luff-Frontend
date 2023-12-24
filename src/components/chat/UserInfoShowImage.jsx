import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const UserInfoShowImage = ({ imageUrl, setShowImage }) => {
	return (
		<div className="absolute left-0 top-0 w-full h-full flex flex-col items-center justify-center bg-[rgba(0,0,0,0.75)] md:rounded-l-none">
			<FontAwesomeIcon
				icon={faTimes}
				className="absolute top-4 right-4 text-2xl text-white cursor-pointer"
				onClick={() => setShowImage(false)}
			/>
			<img
				src={imageUrl}
				alt="User Profile Picture"
				className="relative object-cover object-center h-3/4 aspect-video"
			/>
		</div>
	);
};

export default UserInfoShowImage;
