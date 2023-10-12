import React from 'react'
import InitialForm from '../common/InitialForm'
import FormField from '../common/FormField'
import useRequestResetPassword from './hooks/useRequestResetPassword'
import FormGeneralError from '../common/FormGeneralError'
import FormButton from '../common/FormButton'

const RequestResetPassword = () => {

    const {
        renderRequestPassword
    } = useRequestResetPassword();

    return (
        <div className='w-full h-2/5 p-4 flex justify-center items-center'>
            {renderRequestPassword()}
        </div>
    )
}

export default RequestResetPassword