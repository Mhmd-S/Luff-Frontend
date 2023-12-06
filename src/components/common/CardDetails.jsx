import React from 'react'
import InfoIcon from '../icons/InfoIcon';
import useCardDetails from './hooks/useCardDetails';
import CrossIcon from '../icons/CrossIcon';
import ArrowUp from '../icons/ArrowUp';


const CardDetails = ({ userInfo }) => {

    const {
        openCard,
        handleOpenCard,
        handleCloseCard,
        getAge,
    } = useCardDetails();

    return (
      <div className={`w-full flex flex-col absolute ${openCard ?'text-black h-fit bottom-0 pb-20 bg-white' : 'text-white bottom-0 mb-20'} z-10 md:rounded-b-xl`}>
            <div className={`w-full flex items-center p-4 ${openCard ? 'border-y-2 border-black' : 'mb-7'}`}>
                <p className={`text-4xl font-bold`}>
                    {userInfo.name}
                </p>
                <p className='text-4xl mx-3 font-semibold'>
                    {getAge(userInfo.dob)}
                </p>
                <div className='flex items-center justify-center ml-4'>
                    { openCard ? 
                    <span onClick={handleCloseCard} className='rotate-180 cursor-pointer'>
                        <ArrowUp/>
                    </span> 
                    : 
                    <span onClick={handleOpenCard} className='cursor-pointer'>
                        <InfoIcon/> 
                    </span>
                    }
                </div>
            </div>
            <p className={`${!openCard &&  'hidden'} p-3 mb-10`}>
                {userInfo.bio}  
            </p>
      </div>
    )
}

export default CardDetails