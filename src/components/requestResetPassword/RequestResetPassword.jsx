import React from 'react'
import useRequestResetPassword from './hooks/useRequestResetPassword'

const RequestResetPassword = () => {

    const {
        renderRequestPassword
    } = useRequestResetPassword();

    return (
        <div className='w-full h-full p-6 flex justify-center items-center'>
            {renderRequestPassword()}
        </div>
    )
}

export default RequestResetPassword