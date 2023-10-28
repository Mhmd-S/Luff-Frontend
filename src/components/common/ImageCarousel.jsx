import React from 'react'
import useImageCarousel from './hooks/useImageCarousel'
import ChevronRight from '../icons/ChevronRight';
import ChevronLeft from '../icons/ChevronLeft';
import CarouselIndicator from './CarouselIndicator';

const ImageCarousel = ({ images }) => {
    
    const {
        currentImageIndex,
        handlePrevClick,
        handleNextClick
    } = useImageCarousel(Object.keys(images).length);

    return (
        <div className="w-full h-full relative flex items-center justify-center after:absolute after:w-full after:h-1/3 after:content-[''] after:bg-gradient-to-t after:from-black after:to-transparent after:bottom-0 after:z-10 after:block after:left-0">
            
            {/* Images indicator */}
            <div className='w-full top-0 absolute h-fit z-10'>
                <CarouselIndicator imagesLength={Object.keys(images).length} currentIndex={currentImageIndex} />
            </div>

            {/* User's Picutre */}
            <img className="w-full h-full object-cover" src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />

            {/* Left button */}
            <button onClick={handlePrevClick} className={`${(currentImageIndex === 0) && 'hidden'} absolute pl-3 w-1/2 h-full left-0 flex items-center justify-start md:transition-all md:opacity-0 md:hover:opacity-100`}>
                <span className='w-fit bg-[#5555552d] rounded-full p-4'>
                    <ChevronLeft />
                </span>
            </button>

            {/* Right button */}
            <button onClick={handleNextClick}  className={`${(currentImageIndex == Object.keys(images).length-1) && 'hidden'} absolute pr-3 w-1/2 h-full right-0 flex items-center justify-end md:transition-all md:opacity-0 md:hover:opacity-100`}>
                <span className='w-fit bg-[#55555534] rounded-full p-4'>
                    <ChevronRight />
                </span>
            </button>

        </div>
    );
};

export default ImageCarousel