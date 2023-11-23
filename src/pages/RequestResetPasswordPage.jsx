import React from 'react'
import RequestResetPassword from '../components/requestResetPassword/RequestResetPassword'

const RequestResetPasswordPage = () => {
  return (
		<div className="w-screen h-screen  relative bg-[#fafafa] grid grid-cols-1 grid-rows-[10%_90%] md:grid-rows-[15%_85%]">
       <div className='w-full flex justify-center items-center'>
          <img src='./logo1.png' alt='logo' className='h-3/4 '/>
          <h1 className=' text-5xl font-8bit font-bold text-purple-500'>
            LUFF
          </h1>
      </div>
      <RequestResetPassword />
    </div>
  )
}

export default RequestResetPasswordPage