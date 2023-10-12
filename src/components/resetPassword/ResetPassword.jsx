import React from 'react'
import useResetPassword from './hooks/useResetPassword'

const ResetPassword = () => {

  const {
    renderResetPassword,
  } = useResetPassword();

  return (
    <div className='w-full h-full'>
      {renderResetPassword()}
    </div>
  )
}

export default ResetPassword