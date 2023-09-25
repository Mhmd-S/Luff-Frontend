import useRegistrationContext from '../context/useRegistrationContext';
import Step1Email from '../Step1Email';
import Step2EmailVerification from '../Step2EmailVerification';
import Step3RegistrationComplete from '../Step3RegistrationComplete';

const useRegistration = () => { 
    const { registrationStage, isLoading } = useRegistrationContext();

    const renderStage = () => {

        switch (registrationStage) {
            case 1:
                return <Step1Email />;
            case 2:
                return <Step2EmailVerification />;
            case 3:
                return <Step3RegistrationComplete />;
            default:
                return <Step1Email />;
        }

    }

    return {renderStage};

}

export default useRegistration