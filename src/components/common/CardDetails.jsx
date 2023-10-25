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
      <div className={`w-full h-full flex flex-col absolute ${openCard && 'text-black'} top-full p-4 mb-10 z-10`}>
            <div className='w-full flex items-center'>
                <p className='text-4xl font-bold'>
                    {userInfo.name}
                </p>
                <p className='text-3xl mx-3 font-semibold'>
                    {getAge(userInfo.dob)}
                </p>
                <div className='flex items-center justify-center ml-4' onClick={handleOpenCard}> //Here
                    { openCard ? <ArrowUp/> : <InfoIcon/> }
                </div>
            </div>
                <p className={`${!openCard &&  'hidden'}`}>
                    iatives that promote environmental stewardship. Conservation efforts, like reforestation and the protection of endangered species, are essential in maintaining the delicate balance of our ecosystems. By recognizing the significance of environmental conservation, we can leave a healthier and more vibrant Earth for future generations.
                </p>  
      </div>
    )
}

export default CardDetails