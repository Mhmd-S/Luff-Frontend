import useRegistrationContext from '../context/useRegistrationContext';
import Step1Email from '../Step1Email';
import Step2EmailVerification from '../Step2EmailVerification';
import Step3PersonalInfo from '../Step3PersonalInfo';
import Step4Pictures from '../Step4Pictures';

const useRegistration = () => { 
    const { registrationStage, isLoading } = useRegistrationContext();

    const renderStage = () => {

        switch (registrationStage) {
            case 1:
                return <Step1Email />;
            case 2:
                return <Step2EmailVerification />
            case 3:
                return <Step3PersonalInfo />
            case 4:
                return <Step4Pictures />
            default:
                return <Step1Email />;
        }

    }

    return {renderStage};

}

export default useRegistration