import axios from 'axios';
import { useState } from 'react';
import useRegistrationContext from '../context/useRegistrationContext';

export const useEmailForm = () => {
    const [ emailInput, setEmailInput ] = useState('');
    const { goNextStage } = useRegistrationContext();

    const verifyEmail = async() => {
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
          console.log(error.response.data.message);
        });
    }

    const handleEmailChange = (e) => {
      const value = e.target.value;
      setEmailInput(value);
    }

    return { emailInput, handleEmailChange, verifyEmail };
}