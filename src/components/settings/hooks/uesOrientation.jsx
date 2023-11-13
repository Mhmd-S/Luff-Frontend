import { useState } from 'react';
import { userAPI } from '../../../api/userAPI';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useAuth } from '../../../contexts/useAuthContext';
import { useNotification } from '../../../contexts/useNotificationContext';

const useChangeGender = () => {

    const  [generalError, setGeneralError] = useState('');
    const [loading, setLoading] = useState(false);

    const { user } = useAuth();
    const { setNotification } = useNotification();

    const { 
        register, 
        handleSubmit, 
        formState: { errors, isDirty } 
      } = useForm({ defaultValues: { orientation: user.orientation }});

    const onSubmit = (data) => {

      if (!isDirty) return; // If the bio is untouched do nothing

      submitChange(data);
    }
  
    const submitChange = async(data) => {

      setLoading(true);

      const response = await userAPI.updateOrientation(data.gender);
      
      setLoading(false);

      if (response.data.status === 'fail') {
        setGeneralError(response.data.message);
      } else {
        setNotification('Change Successful');
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