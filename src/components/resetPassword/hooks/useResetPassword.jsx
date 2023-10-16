import React, { useState } from 'react'
import ResetPasswordForm from '../ResetPasswordForm';
import ResetSuccess from '../ResetSuccess';

const useResetPassword = () => {
  
    const [step, setStep] = useState(0);
    
    const nextStep = () => {
        setStep(step + 1);
    }

    const renderResetPassword = () => {
        switch(step) {
            case 0:
                return <ResetPasswordForm nextStep={nextStep} />;
            case 1:
                return <ResetSuccess/>;
            default:
                return <ResetPasswordForm nextStep={nextStep}/>;
        }
    }

    return {
        renderResetPassword
    }
}

export default useResetPassword