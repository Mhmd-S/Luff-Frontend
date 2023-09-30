import { useState } from 'react'
import Step1 from '../Step1'
import Step2 from '../Step2'

const useOnboarding = () => {

    const [ step, setStep ] = useState(1);

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