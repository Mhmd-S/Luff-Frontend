import React from 'react'
import ImageCarousel from './ImageCarousel';
import HeartIcon from '../icons/HeartIcon';
import CrossIcon from '../icons/CrossIcon';
import CardDetails from './CardDetails';

const Card = ({ userInfo }) => {
    return (
        <div className='w-full h-full overflow-y-scroll relative md:w-1/3'>
            
            <ImageCarousel images={userInfo.profilePictures}/>

            <CardDetails userInfo={userInfo} />
            
            <div className='absolute bottom-0 w-full flex justify-evenly items-center py-4 z-10'>
                <HeartIcon />
                <CrossIcon />
            </div>
        </div>
    )
}

export default Card