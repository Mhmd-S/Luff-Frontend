import React, { useState } from 'react'
import { userAPI } from '../../../api/userAPI' 
import { useNotification } from '../../../contexts/useNotificationContext';

const useFlagModal = (recipient) => {
    
    const { setNotification } = useNotification();
    const [ loading, setLoading ] = useState(false);

    const handleFlagUser = async() => {
        setLoading(true);
        await userAPI.flagUser(recipient._id)
        setNotification('User flagged successfully');
    }

    return{
        loading,
        handleFlagUser
    }

}

export default useFlagModal