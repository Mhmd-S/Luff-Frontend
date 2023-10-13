import React from 'react'
import useResetPassword from './hooks/useResetPassword'

const ResetPassword = () => {

  const {
    renderResetPassword,
  } = useResetPassword();

  return (
    <div className='w-full h-3/4 p-4'>
      {renderResetPassword()}
    </div>
  )
}

export default ResetPassword