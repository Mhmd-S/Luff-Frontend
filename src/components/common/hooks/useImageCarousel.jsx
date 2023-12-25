import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

const useImageCarousel = (images, dummyCard) => {
	const [profileImages, setProfileImages] = useState([]);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const { majorModalOpen } = useOutletContext();

	useEffect(() => {
		const imagesValues = Object.values(images);

		// Gets valid images from the user profile
		const validImages = imagesValues.filter((image) => {
			return image !== '';
		});

		setProfileImages(validImages);

		window.addEventListener('keyup', handleKeyDownImage);

		return () => {
			window.removeEventListener('keyup', handleKeyDownImage);
		};
	}, [majorModalOpen, currentImageIndex, images]);

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

	const handleKeyDownImage = (e) => {
		if (majorModalOpen || dummyCard || e.isTrusted === false) return;

		if (e.code === 'Space') {
			setCurrentImageIndex((prevIndex) =>
				(prevIndex === profileImages.length - 1) ? 0 : prevIndex + 1
			);
		}
	};

	return {
		profileImages,
		currentImageIndex,
		handlePrevClick,
		handleNextClick,
	};
};

export default useImageCarousel;
