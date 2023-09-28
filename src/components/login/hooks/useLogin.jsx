import { useState } from 'react';
import { userAPI } from '../../../api/userAPI';
import { useForm } from 'react-hook-form';

const useLogin = () => {
  const  [generalError, setGeneralError] = useState('');

  const { 
          register, 
          handleSubmit, 
          formState: { errors } 
        } = useForm();

  const login = async(email, password) => {
      
      const response = await userAPI.loginUser({email, password});
  
      if (response.data.status === 'success') {
        return response.data;
      } else {
        setGeneralError(response.data.message);
      }
      
  }

  const onSubmit = (data) => {
    login(data.email, data.password);
  }

  return {
          register, 
          handleSubmit, 
          onSubmit, 
          generalError,
          errors
  }

}

export default useLogin