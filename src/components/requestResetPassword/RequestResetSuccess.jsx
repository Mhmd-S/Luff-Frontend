import React from 'react'
import { Link } from 'react-router-dom'

const RequestResetSuccess = () => {
  return (
    <div className='w-full h-full flex flex-col p-4 justify-center items-center'>

      <img src='/2709.svg' alt='Success_Icon' className='w-3/5'/>
      
      <h2 className='pb-4 font-bold text-2xl text-center text-sky-500'>
        Email Sent!
      </h2>
      
      <h3 className='text-center text-xl'>
        Check your email for a link to reset your password!
      </h3>
      
      <Link to='/login'>
        <button className='mt-4 bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded'>
          Back to Login
        </button>
      </Link>
    
    </div>
  )
}

export default RequestResetSuccess