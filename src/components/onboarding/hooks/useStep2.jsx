import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { userAPI } from '../../../api/userAPI'

const useStep2 = ( nextStep ) => {

    const [ generalError, setGeneralError ] = useState('');

    const { 
        register, 
        handleSubmit, 
        resetField,
        setError,
        formState: { errors } 
    } = useForm()

    const onSubmit = async(data) => {
        const pics = Object.values(data);

        // Upload pics through API
        try {
            let picsPromises = pics.map(async(pic) => {
                if ( pic.length === 0) return;
                console.log(pic[0]);
                return await userAPI.uploadProfilePicture(pic[0]);
            });
            const result = await Promise.all(picsPromises);
            console.log(result);
            nextStep();
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
        setError,
        generalError, 
        errors 
    }

}

export default useStep2