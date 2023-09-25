import { userAPI } from '../../../api/userAPI';
import useRegistrationContext from '../context/useRegistrationContext';
import { useForm  } from 'react-hook-form';

const useVerifyEmail = () => {

    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
      } = useForm();

    const { goNextStage, userInfo } = useRegistrationContext();

    const onSubmit = (data) => {
        handleVerifyCode(data);
    }

    const handleVerifyCode = async(data) => {

        const response = await userAPI.verifyCode(userInfo.email, data.code);
        
        if (response.data.status === "success") {
            userAPI.registerUser(userInfo.email, userInfo.password)
            .then(()=> {
                goNextStage();
            });
        }
    }

    return { 
            onSubmit, 
            handleSubmit, 
            register, 
            errors 
        };
}

export default useVerifyEmail