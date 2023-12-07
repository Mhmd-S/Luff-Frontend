import React, { useState } from 'react'
import PropTypes from 'prop-types';

const CarouselIndicator = ({ imagesLength, currentIndex }) => {

    return (
        <div className='w-full h-3 flex p-1'>
                {new Array(imagesLength).fill().map((_, index) => (
                        <span key={index} className={`h-full grow rounded-full inline-block mx-1 ${currentIndex === index ? 'bg-white' : 'bg-gray-700'}`}></span>
                ))
                }
        </div>
    )
}

CarouselIndicator.propTypes = {
    imagesLength: PropTypes.number.isRequired,
    currentIndex: PropTypes.number.isRequired
};

export default CarouselIndicator;