import { useState } from 'react';
import { userAPI } from '../../../api/userAPI';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useAuth } from '../../../contexts/useAuthContext';
  import { useNotification } from '../../../contexts/useNotificationContext';

const useChangeGender = () => {

    const [ generalError, setGeneralError ] = useState('');
    const [ loading, setLoading ] = useState(false); // Not using it for now, too fast to see the loading state

    const { user, getUserInfo } = useAuth();
    const { setNotification } = useNotification();

    const { 
        register, 
        handleSubmit, 
        formState: { errors, isDirty } 
      } = useForm({ defaultValues: { gender: user.gender }});

    const onSubmit = (data) => {

      if (!isDirty) return; // If the gender input is untouched do nothing

      submitChange(data);
    }
  
    const submitChange = async(data) => {
      const response = await userAPI.updateGender(data.gender);

      if (response.data.status === 'fail') {
        setGeneralError(response.data.message);
      } else {
        setNotification('Change Successful');
        getUserInfo();
      }
    }

  return {
    register,
    handleSubmit,
    onSubmit,
    user,
    loading,
    generalError,
    errors
  }
}

export default useChangeGender;