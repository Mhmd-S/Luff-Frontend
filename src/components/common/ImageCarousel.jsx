import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronLeft,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import CarouselIndicator from './CarouselIndicator';
import useImageCarousel from './hooks/useImageCarousel';

const ImageCarousel = ({ images }) => {
	const {
		profileImages,
		currentImageIndex,
		handlePrevClick,
		handleNextClick,
	} = useImageCarousel(images);

	return (
		<div className="w-full h-full relative flex items-center justify-center after:absolute after:w-full after:h-1/2 after:content-[''] after:bg-gradient-to-t after:from-black after:to-transparent after:bottom-0 after:z-10 after:block after:left-0 after:md:rounded-l-xl">
			{/* Images indicator */}
			<div className="w-full top-0 absolute h-fit z-10">
				<CarouselIndicator
					imagesLength={profileImages.length}
					currentIndex={currentImageIndex}
				/>
			</div>

			{/* User's Picutre */}
			<img
				className="w-full h-full object-cover md:rounded-l-xl"
				src={profileImages[currentImageIndex]}
				alt={`Image ${currentImageIndex}`}
			/>

			{/* Left button */}
			<button
				onClick={handlePrevClick}
				className={`${
					currentImageIndex === 0 && 'hidden'
				} absolute pl-3 w-1/2 h-full left-0 flex items-center z-30 justify-start md:transition-all md:opacity-0 md:hover:opacity-100`}
			>
				<FontAwesomeIcon
					icon={faChevronLeft}
					className="w-fit bg-[#55555534] text-white rounded-full p-4"
				/>
			</button>

			{/* Right button */}
			<button
				onClick={handleNextClick}
				className={`${
					currentImageIndex ==
						Object.keys(profileImages).length - 1 && 'hidden'
				} absolute outline-none pr-3 w-1/2 h-full right-0 z-30 flex items-center justify-end md:transition-all md:opacity-0 md:hover:opacity-100`}
			>
				<FontAwesomeIcon
					icon={faChevronRight}
					className="w-fit bg-[#55555534] text-white rounded-full p-4"
				/>
			</button>
		</div>
	);
};

export default ImageCarousel;
