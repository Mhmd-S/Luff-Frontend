import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { userAPI } from '../../../api/userAPI';

const useChangePassword = (nextStep) => {

    const [ generalError, setGeneralError ] = useState('');
    const [ loading, setLoading ] = useState(false);

    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();

    const onSubmit = async(data) => {
        
        setGeneralError('');

        setLoading(true);

        // Submit the data to the API
        try{
            // await userAPI.updatePassword(data.password);
        } catch(err) {
            setGeneralError(err.response.data.message);
            setLoading(false);
            return;
        }

        if (generalError === '') {
            nextStep();
        }

        setLoading(false);    
    }

    return { 
        register, 
        handleSubmit, 
        onSubmit,
        loading,
        generalError, 
        errors 
    }
}

export default useChangePassword;