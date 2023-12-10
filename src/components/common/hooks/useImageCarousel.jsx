import React, { useEffect, useState } from 'react';

const useImageCarousel = (images) => {
	const [profileImages, setProfileImages] = useState([]);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const imagesValues = Object.values(images);

		// Gets valid images from the user profile
		const validImages = imagesValues.filter((image) => {
			return image !== '';
		});

		setProfileImages(validImages);

		window.addEventListener('keyup', (e) =>
			handleKeyDown(e, validImages.length)
		);
		return () => {
			window.removeEventListener('keyup', handleKeyDown);
		};
	}, []);

	const handlePrevClick = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === 0 ? profileImages.length - 1 : prevIndex - 1
		);
	};

	const handleNextClick = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === profileImages.length - 1 ? 0 : prevIndex + 1
		);
	};

	const handleKeyDown = (e, imagesLength) => {
		if (e.isTrusted === false) return;

		if (e.code === 'Space') {
			setCurrentImageIndex((prevIndex) =>
				prevIndex === imagesLength - 1 ? 0 : prevIndex + 1
			);
		}
	};

	return {
		profileImages,
		currentImageIndex,
		handlePrevClick,
		handleNextClick,
		handleKeyDown,
	};
};

export default useImageCarousel;
