import React, { useEffect, useState } from 'react'

const useImageCarousel = (images) => {

  const [ profileImages, setProfileImages ] = useState([]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const imagesValues = Object.values(images);

    // Gets valid images from the user profile
    const validImages = imagesValues.filter((image) => {
      return image !== '';
    })

    setProfileImages(validImages);
  },[])  

    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? profileImages.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === profileImages.length - 1 ? 0 : prevIndex + 1));
    };

  return {
    profileImages,
    currentImageIndex,
    handlePrevClick,
    handleNextClick
  }
}

export default useImageCarousel