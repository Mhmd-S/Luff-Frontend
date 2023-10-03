import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { userAPI } from '../../../api/userAPI';

const useStep1 = (nextStep) => {

    const [ generalError, setGeneralError ] = useState('');
    const [ loading, setLoading ] = useState(false);

    const { 
        register, 
        handleSubmit, 
        formState:{errors} 
    } = useForm()

    // Submit API request from here
    const submitName = async(name) => {
        try{
            await userAPI.updateName(name);
        }
        catch(err) {
            setGeneralError(err.response.data.message);
        }
    }

    const submitDob = async(dob) => {
        try{
            await userAPI.updateDob(dob);
        } catch(err) {
            setGeneralError(err.response.data.message);
        }
    }

    const submitBio = async(bio) => {
        try {
            await userAPI.updateBio(bio);
        } catch(err) {
            setGeneralError(err.response.data.message);
        }
    }

    const onSubmit = async(data) => {
        
        setGeneralError('');

        setLoading(true);

        // Submit the data to the API
        await submitName(data.name);
        await submitDob(data.dob);
        await submitBio(data.bio);

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

export default useStep1