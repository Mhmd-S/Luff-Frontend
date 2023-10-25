import React, { useState } from 'react'

const useImageCarousel = (imagesLength) => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? imagesLength - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === imagesLength - 1 ? 0 : prevIndex + 1));
    };

  return {
    currentImageIndex,
    handlePrevClick,
    handleNextClick
  }
}

export default useImageCarousel