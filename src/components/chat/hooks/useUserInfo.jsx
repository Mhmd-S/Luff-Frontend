import React, { useState } from 'react';

const useUserInfo = (userInfo) => {
	const [showImage, setShowImage] = useState(null);

	const renderImages = () => {
		if (!userInfo || !userInfo.profilePictures) return null;

		return Object.entries(userInfo.profilePictures).map(([key, image]) => {
			if (!image) return null;
			return (
				<img
					key={key}
					src={image}
					onClick={() => setShowImage(image)}
					alt="User Profile Picture"
					className="relative h-full object-cover object-center rounded-lg aspect-video cursor-pointer border-2 border-transparent hover:border-purple-500"
				/>
			);
		});
	};

	return {
		renderImages,
		showImage,
		setShowImage,
	};
};

export default useUserInfo;
