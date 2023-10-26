import React from 'react'
import ImageCarousel from './ImageCarousel';
import HeartIcon from '../icons/HeartIcon';
import CrossIcon from '../icons/CrossIcon';
import CardDetails from './CardDetails';

const Card = ({ userInfo }) => {
    return (
        <div className='w-full h-full flex flex-col items-center relative md:w-1/3'>
            
            <ImageCarousel images={userInfo.profilePictures}/>

            <CardDetails userInfo={userInfo} />
            
            <div className='absolute bottom-0 w-full flex justify-evenly items-center pb-4 z-10'>
                <span className='p-3 border-red-500 border-4 rounded-full cursor-pointer'>
                    <HeartIcon />
                </span>
                
                <span className='p-3 border-blue-600 border-4 rounded-full cursor-pointer'>
                    <CrossIcon />
                </span>
            </div>
        </div>
    )
}

export default Card