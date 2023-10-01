import { useEffect, useState } from 'react'
import Step1 from '../Step1'
import Step2 from '../Step2'
import { useAuth } from '../../../contexts/useAuthContext'
import { useNavigate } from 'react-router-dom'

const useOnboarding = () => {

    const navigate = useNavigate();

    const [ step, setStep ] = useState(0);

    const { user } = useAuth();

    useEffect(()=>{
        if (!user) {
            navigate('/login');
        }

        if (user && user.onboardStep == 2) {
            navigate('/dashboard');
        }

        setStep(user.onboardStep);
    },[])

    const nextStep = () => {
        setStep(step + 1);
    }

    const prevStep = () => {
        setStep(step - 1);
    }

    const renderStep = () => {
        switch(step) {
            case 0:
                return <Step1 nextStep={nextStep} prevStep={prevStep} />
            case 1:
                return <Step2 />
            // case 2:
            //     return <Step3 />
            default:
                return <Step1 />
        }
    }

    return { step, nextStep, prevStep, renderStep };

}

export default useOnboarding