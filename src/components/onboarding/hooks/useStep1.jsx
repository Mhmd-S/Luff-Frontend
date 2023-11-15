import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { userAPI } from '../../../api/userAPI';

const useStep1 = (nextStep) => {

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
        const onBoardResult = [
            await userAPI.updateName(data.name),
            await userAPI.updateDob(data.dob),
            await userAPI.updateBio(data.bio),
            await userAPI.updateGender(data.gender),
            await userAPI.updateOrientation(data.orientation),
        ]

        // Check if any of the API calls failed
        const generalError = onBoardResult.find(result => result.data.status === 'fail');

        // If any of the API calls failed, set the general error to the message
        if (generalError) {
            setGeneralError(generalError.data.message);
        } else {
            const response = await userAPI.onboardNext();

            // If updating the onboard step failed, set the general error to the message
            if (response.data.status === 'fail') {
                setGeneralError('We are facing some issues. Please try again later.');
                return;
            }

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