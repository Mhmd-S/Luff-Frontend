import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { userAPI } from '../../../api/userAPI';

const useRequestResetPasswordForm = ({ nextStep }) => {

    const [loading, setLoading ] = useState(false);
    const [generalError, setGeneralError ] = useState('');

    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();

    const onSubmit = async(data) => {

        setLoading(true);

        const response = await userAPI.requestResetPassword(data.email);
        
        if (response.data.status === 'success') {
            nextStep();
        } else {
            setGeneralError(response.data.message);
        }

        setLoading(false);
    }

    return { 
        register, 
        handleSubmit, 
        onSubmit,
        errors,
        generalError,
        loading 
    }

}

export default useRequestResetPasswordForm