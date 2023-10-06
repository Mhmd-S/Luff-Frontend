import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { userAPI } from '../../../api/userAPI'

const useStep2 = ( nextStep ) => {

    const [ generalError, setGeneralError ] = useState('');
    const [ loading, setLoading ] = useState(false);

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
            setLoading(true);

            let picsPromises = pics.map(async(pic) => {
                
                if ( pic.length === 0) return;

                return await userAPI.uploadProfilePicture(pic[0]);
            });
            
            await Promise.all(picsPromises);

            await userAPI.onboardNext();
        
            nextStep();
        } catch(err) {
            setGeneralError(err.message);
        }
        setLoading(false);
    }

    return { 
        register, 
        handleSubmit, 
        onSubmit,
        resetField,
        setError,
        loading,
        generalError, 
        errors 
    }

}

export default useStep2