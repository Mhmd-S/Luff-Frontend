import axios from 'axios';
import { useState } from 'react';
import useRegistrationContext from '../context/useRegistrationContext';

export const useEmailForm = () => {
    const [ emailInput, setEmailInput ] = useState('');
    const [ errorMessage, setErrorMessage ] = useState('');
    const { goNextStage, setUserEmail } = useRegistrationContext();

    const verifyEmail = async() => {

      setErrorMessage('');
      
      axios.post('http://127.0.0.1:3000/user/verify-email', {
          email: emailInput
      })
      .then(function (response) {
        console.log(response.data.status);
        if (response.data.status === "success") {
          goNextStage();
        }
      })
      .catch(function (error) {
        setErrorMessage(error.response.data.message);
        console.log(error.response.data.message);
      });
    }

    const handleEmailChange = (e) => {
      const value = e.target.value;
      setEmailInput(value);
      setUserEmail(value);
    }

    return { emailInput, handleEmailChange, verifyEmail, errorMessage };
}