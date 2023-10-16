import React from 'react'
import { Link } from 'react-router-dom'

const ResetSuccess = () => {
  return (
    <div className='w-full h-full flex flex-col p-4 justify-center items-center'>
      <img src='/2714.svg' alt='Success_Icon' className='w-3/5'/>
      <h2 className='pb-4 font-bold text-2xl text-center text-sky-500'>
        Password Reset Successful
      </h2>
      <h3 className='text-center text-xl'>
        You can now login with your new password!
      </h3>
      <Link to='/login'>
        <button className='mt-4 bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded'>
          Back to Login
        </button>
      </Link>
    </div>
  )
}

export default ResetSuccess