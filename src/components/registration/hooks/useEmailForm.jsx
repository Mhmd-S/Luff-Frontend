import { userAPI } from '../../../api/useAPI';
import { useState } from 'react';
import useRegistrationContext from '../context/useRegistrationContext';

export const useEmailForm = () => {
    const [ emailInput, setEmailInput ] = useState('');
    const [ errorMessage, setErrorMessage ] = useState('');
    const { goNextStage, setUserEmail } = useRegistrationContext();

    const verifyEmail = async() => {

      setErrorMessage('');

      const response = userAPI.sendVerificationCode(emailInput);

      if (response.status === "success") {
        goNextStage();
      } else {
        setErrorMessage(response.message);
      }
    }

    const handleEmailChange = (e) => {
      const value = e.target.value;
      setEmailInput(value);
      setUserEmail(value);
    }

    return { emailInput, handleEmailChange, verifyEmail, errorMessage };
}