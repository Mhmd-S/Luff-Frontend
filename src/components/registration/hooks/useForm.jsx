import axios from 'axios';
import { useEffect, useState } from 'react';

export const useForm = () => {
    const [emailInput, setEmailInput ] = useState('');

    const verifyEmail = async() => {
        axios.post('http://127.0.0.1:3000/verify-email', {
            email: emailInput
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
}