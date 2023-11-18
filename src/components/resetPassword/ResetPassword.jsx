import React from 'react'
import useResetPassword from './hooks/useResetPassword'

const ResetPassword = () => {

  const {
    renderResetPassword,
  } = useResetPassword();

  return (
    <div className='w-full h-full rounded-xl flex flex-col items-center justify-evenly p-4 bg-[#fafafa]'>
      {renderResetPassword()}
    </div>
  )
}

export default ResetPassword