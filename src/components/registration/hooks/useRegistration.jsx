import useRegistrationContext from '../context/useRegistrationContext';
import { useAuth } from '../../../contexts/useAuthContext';
import Step1Email from '../Step1Email';
import Step2EmailVerification from '../Step2EmailVerification';
import Step3RegistrationComplete from '../Step3RegistrationComplete';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useRegistration = () => {
	const { registrationStage } = useRegistrationContext();
    const navigate = useNavigate();

	const { user, isLoading } = useAuth();

	useEffect(() => {
        if (user && !isLoading) {
            navigate('/app/home');
        }
    }, []);

	const renderStage = () => {
		switch (registrationStage) {
			case 0:
				return <Step1Email />;
			case 1:
				return <Step2EmailVerification />;
			case 2:
				return <Step3RegistrationComplete />;
			default:
				return <Step1Email />;
		}
	};

	return { renderStage };
};

export default useRegistration;
