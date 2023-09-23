import { useState } from 'react'
import { userAPI } from '../../../api/useAPI';
import useRegistrationContext from '../context/useRegistrationContext';

const useVerifyEmail = () => {

    const [ codeInput, setCodeInput ] = useState('');
    const [ errorMessage, setErrorMessage ] = useState('');
    const { goNextStage, userEmail } = useRegistrationContext();


    const handleCodeChange = (e) => {
        const value = e.target.value;
        setCodeInput(value);
    }

    const handleVerifyCode = async() => {

        setErrorMessage('');

        const response = await userAPI.verifyCode(userEmail, codeInput);
        
        if (response.status === "success") {
            goNextStage();
        } else {
            setErrorMessage(response.message);
        }

    }

    return { codeInput, handleCodeChange, handleVerifyCode, errorMessage };
}

export default useVerifyEmail