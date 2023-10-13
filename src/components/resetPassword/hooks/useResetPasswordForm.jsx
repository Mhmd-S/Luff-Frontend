import React, { useState} from 'react'
import { userAPI } from '../../../api/userAPI';
import { useForm } from 'react-hook-form';
import { useSearchParams } from "react-router-dom";

// COntinue here
const useResetPasswordForm = ( nextStep ) => {
    
    const [loading, setLoading] = useState(false);
    const [generalError, setGeneralError] = useState(null); 
    const [searchParams, setSearchParams] = useSearchParams();

    const { 
        register, 
        handleSubmit, 
        watch,
        formState: { errors } 
    } = useForm();

    const watchPassword = watch('password', '');

    const onSubmit = async(data) => {
            
        setGeneralError('');
        setLoading(true);

        // Submit the data to the API
        const token = searchParams.get('token');
        const userId = searchParams.get('id');
        
        const response = await userAPI.resetPassword(token, userId, data.password);
        
        if (response.data.status === 'success') {
            nextStep();
        } else {
            setGeneralError(response.data.message);
            setLoading(false);
        }
    }

    return { 
        register, 
        handleSubmit, 
        onSubmit,
        generalError, 
        errors,
        loading,
        watchPassword
    }
}

export default useResetPasswordForm