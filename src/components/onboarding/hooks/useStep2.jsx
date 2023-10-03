import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { userAPI } from '../../../api/userAPI'

const useStep2 = () => {

    const [ generalError, setGeneralError ] = useState('');

    const { 
        register, 
        handleSubmit, 
        resetField,
        formState:{errors} 
    } = useForm()

    const onSubmit = async(data) => {
        const pics = Object.values(data);
        console.log(pics);
        // Upload pics through API
        try {
            let picsPromises = pics.map(async(pic) => {
                if ( pic.length === 0) return;
                console.log(pic[0]);
                return await userAPI.uploadProfilePicture(pic[0]);
            });
            await Promise.all(picsPromises);
        } catch(err) {
            setGeneralError(err.message);
            return;
        }

        console.log('Pics uploaded');
    }

    return { 
        register, 
        handleSubmit, 
        onSubmit,
        resetField,
        generalError, 
        errors 
    }

}

export default useStep2