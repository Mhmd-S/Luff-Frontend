import React from 'react'
import { Link } from 'react-router-dom'
import EnvelopeIcon from '../icons/EnvelopeIcon'

const RequestResetSuccess = () => {
  return (
    <div className='w-full h-1/2 flex flex-col justify-evenly items-center bg-white border-[1px] border-[#e6e6e6] p-4 rounded-lg shadow-lg md:w-2/6 md:h-5/6'>
      <EnvelopeIcon />
    
      <h2 className='pb-4 font-bold text-2xl text-center text-purple-500'>
        Email Sent!
      </h2>

      <p className='text-center px-2'>
        Please check your email for the reset link.
      </p>
    
    </div>
  )
}

export default RequestResetSuccess