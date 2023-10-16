import React from 'react'
import useResetPassword from './hooks/useResetPassword'

const ResetPassword = () => {

  const {
    renderResetPassword,
  } = useResetPassword();

  return (
    <div className='w-full md:w-2/6 h-2/5 md:h-3/5 p-4 flex justify-center items-center'>
      {renderResetPassword()}
    </div>
  )
}

export default ResetPassword