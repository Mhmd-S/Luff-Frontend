import { useState } from 'react';
import { userAPI } from '../../../api/userAPI';
import { useForm } from 'react-hook-form';
import useRegistrationContext from '../context/useRegistrationContext';

export const useEmailForm = () => {

    const  [generalError, setGeneralError] = useState('');

    const { 
            register, 
            handleSubmit, 
            watch, 
            formState: { errors } 
          } = useForm();

    const { 
            goNextStage, 
            setUserInfo,
            setLoading, 
          } = useRegistrationContext();

    const watchPassword = watch('password', '');

    const onSubmit = (data) => {
      verifyEmail(data);
    }

    const verifyEmail = async(data) => {

      setLoading(true);
      const response = await userAPI.sendVerificationCode(data.email);
      setLoading(false);

      if (response.data.status === 'success') {
        const userObj = {
          email: data.email,
          password: data.password
        }
        setUserInfo(userObj);
        goNextStage();
      } else {
        setGeneralError(response.data.message);
      }
    }

    return { 
            register, 
            onSubmit, 
            handleSubmit, 
            generalError,
            watchPassword, 
            errors 
          };
}