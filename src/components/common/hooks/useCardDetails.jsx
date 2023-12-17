import React, { useState } from 'react'
import getAge from '../../utils/getAge'

const useCardDetails = () => { 
    const [openCard, setOpenCard] = useState(false);

    const handleOpenCard = () => {
        setOpenCard(true);
    };

    const handleCloseCard = () => {
        setOpenCard(false);
    };

    return {
        openCard,
        handleOpenCard,
        handleCloseCard,
        getAge
    }
}

export default useCardDetails