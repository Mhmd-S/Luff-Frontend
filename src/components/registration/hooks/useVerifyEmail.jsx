import { useState } from 'react'
import axios from 'axios';
import useRegistrationContext from '../context/useRegistrationContext';
import { verifyCode } from '../../../api/useAPI';

const useVerifyEmail = () => {

    const [ codeInput, setCodeInput ] = useState('');
    const [ errorMessage, setErrorMessage ] = useState('');
    const { goNextStage, userEmail } = useRegistrationContext();


    const handleCodeChange = (e) => {
        const value = e.target.value;
        setCodeInput(value);
    }

    const handleVerifyCode = () => {
        
        verifyCode(userEmail, codeInput)
            .then(res => {
                if (res.status === "success") {
                    goNextStage();
                }
            });
    
    }

    return { codeInput, handleCodeChange, handleVerifyCode, errorMessage };
}

export default useVerifyEmail