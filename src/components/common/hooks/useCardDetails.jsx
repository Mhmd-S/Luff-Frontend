import React, { useState } from 'react'

const useCardDetails = () => { 
    const [openCard, setOpenCard] = useState(false);

    const handleOpenCard = () => {
        setOpenCard(true);
    };

    const handleCloseCard = () => {
        setOpenCard(false);
    };

    const getAge = (dob) => {
        const date = new Date(dob);
        const ageDiffMs = Date.now() - date.getTime();
        const ageDate = new Date(ageDiffMs);
        const age = Math.abs(ageDate.getUTCFullYear() - 1970);
        return age;
    }


    return {
        openCard,
        handleOpenCard,
        handleCloseCard,
        getAge
    }
}

export default useCardDetails