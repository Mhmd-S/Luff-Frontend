import React from 'react'
import ImageCarousel from './ImageCarousel';
import HeartIcon from '../icons/HeartIcon';
import CrossIcon from '../icons/CrossIcon';

const Card = ({ userInfo }) => {

    const getAge = (dob) => {
        const date = new Date(dob);
        const ageDiffMs = Date.now() - date.getTime();
        const ageDate = new Date(ageDiffMs);
        const age = Math.abs(ageDate.getUTCFullYear() - 1970);
        return age;
    }

    return (
        <div className='w-full h-full relative md:w-1/3'>
            <ImageCarousel images={userInfo.profilePictures}/>
            <div className='w-fit flex items-end absolute bottom-10 p-6 pb-10 text-white z-10'>
                <p className='text-4xl font-bold'>
                        {userInfo.name}
                </p>
                <p className='ml-2 text-3xl font-semibold'>
                        {getAge(userInfo.dob)}
                </p>
            </div>
            
            <div className='absolute bottom-0 w-full flex justify-evenly items-center py-4 z-10'>
                <HeartIcon />
                <CrossIcon />
            </div>
        </div>
    )
}

export default Card