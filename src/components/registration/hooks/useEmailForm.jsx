import { userAPI } from '../../../api/userAPI';
import { useEffect, useState } from 'react';
import { validateEmail } from '../utils/Step1Validation';
import useRegistrationContext from '../context/useRegistrationContext';

export const useEmailForm = () => {
  
    const { goNextStage, userEmail, setUserEmail } = useRegistrationContext();
    const [ emailInput, setEmailInput ] = useState('');
    const [ errorMessage, setErrorMessage ] = useState('');


    useEffect(() => {
      if (userEmail) {
        setEmailInput(userEmail);
      }
    }, [])

    const verifyEmail = async() => {

      setErrorMessage('');

      // Client Validation
      if (!validateEmail(emailInput)) {
        setErrorMessage('Please enter a TP email');
        return;
      }

      const response = await userAPI.sendVerificationCode(emailInput);

      if (response.data.status === 'success') {
        setUserEmail(emailInput);
        goNextStage();
      } else {
        // If the user has already provided an email, we can skip displaying the error and take him to insert his code
        if (userEmail) {
          goNextStage();
        }
        // Checking if it is a validation error
        response.data.message?.msg ? setErrorMessage(response.data.message.msg) : setErrorMessage(response.data.message);
      }
    }

    const handleEmailChange = (e) => {
      const value = e.target.value;
      setEmailInput(value);
    }

    return { emailInput, handleEmailChange, verifyEmail, errorMessage };
}