import React, { useState } from 'react'
import RequestResetPasswordForm from '../RequestResetPasswordForm';
import RequestResetSuccess from '../RequestResetSuccess';


const useRequestResetPassword = () => {

    const [ step, setStep ] = useState(0);

    const nextStep = () => {
        setStep(step + 1);
    };

    const renderRequestPassword = () => {
            
            switch(0) {
                case 0:
                    return <RequestResetPasswordForm nextStep={nextStep} />;
                case 1:
                    return <RequestResetSuccess />
                default:
                    return null;
            }

    }

    return { 
        renderRequestPassword
    }
}

export default useRequestResetPassword