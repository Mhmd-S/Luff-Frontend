import { userAPI } from '../../../api/userAPI';
import { useForm } from 'react-hook-form';
import useRegistrationContext from '../context/useRegistrationContext';

export const useEmailForm = () => {
    const { 
            register, 
            handleSubmit, 
            watch, 
            formState: { errors } 
          } = useForm();

    const { 
            goNextStage, 
            setUserInfo 
          } = useRegistrationContext();

    const watchPassword = watch('password', '');

    const onSubmit = (data) => {
      verifyEmail(data);
    }

    const verifyEmail = async(data) => {

      const response = await userAPI.sendVerificationCode(data.email);

      if (response.data.status === 'success') {
        const userObj = {
          email: data.email,
          password: data.password
        }
        setUserInfo(userObj);
        goNextStage();
      }

    }

    return { 
            register, 
            onSubmit, 
            handleSubmit, 
            watchPassword, 
            errors 
          };
}