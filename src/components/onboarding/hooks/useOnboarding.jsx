import { useEffect, useState } from 'react'
import Step1 from '../Step1'
import Step2 from '../Step2'
import Step3 from '../Step3'
import { useAuth } from '../../../contexts/useAuthContext'
import { useNavigate } from 'react-router-dom'

const useOnboarding = () => {

    const navigate = useNavigate();

    const [ step, setStep ] = useState(1);

    const { user, loading } = useAuth();

    useEffect(() => {
        if (!user) {
            // User is not authenticated, redirect to login
            navigate('/login');
        } else if (user.onboardStep == 4) {
            // User is already on step 2, onboarding completed, redirect to dashboard
            navigate('/dashboard');
        } else {
            // Set the step to user's onboardStep, 0 is default.
            setStep(1);
        }
    }, [user, loading]);
    

    const nextStep = () => {
        setStep(step + 1);
    }

    const prevStep = () => {
        setStep(step - 1);
    }

    const renderStep = () => {
        switch(step) {
            case 0:
                return <Step1 nextStep={nextStep} />
            case 1:
                return <Step2 nextStep={nextStep} />
            case 2:
                return <Step3 />
            default:
                return <Step1 />
        }
    }

    return { step, loading, nextStep, prevStep, renderStep };

}

export default useOnboarding