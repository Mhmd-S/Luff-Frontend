import React from 'react'
import useRequestResetPassword from './hooks/useRequestResetPassword'

const RequestResetPassword = () => {

    const {
        renderRequestPassword
    } = useRequestResetPassword();

    return (
        <div className='w-full md:w-2/6 h-3/6 md:h-3/5 p-6 flex justify-center items-center'>
            {renderRequestPassword()}
        </div>
    )
}

export default RequestResetPassword