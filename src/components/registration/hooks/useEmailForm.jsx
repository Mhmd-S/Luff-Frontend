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
            userEmail, 
            setUserEmail 
          } = useRegistrationContext();

    const watchPassword = watch('password', '');

    // If an email is already found in context, we will use it as a default value
    // This is useful when the user is going back and forth between steps
    // useEffect(() => {
    //   if (userEmail) {
    //     setEmailInput(userEmail);
    //   }
    // }, [])

    const verifyEmail = async(data) => {

      const response = await userAPI.sendVerificationCode(data.email);

      if (response.data.status === 'success') {
        setUserEmail(data.email);
        goNextStage();
      } else {
        // If the user has already provided an email, we can skip displaying the error and take him to insert his code
        if (userEmail) {
          goNextStage();
        }
      }
    }

    const onSubmit = (data) => {
      console.log(data);
      verifyEmail(data);
    }

    return { 
            register, 
            onSubmit, 
            handleSubmit, 
            watchPassword, 
            errors 
          };
}