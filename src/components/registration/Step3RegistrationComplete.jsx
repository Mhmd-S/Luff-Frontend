import React from 'react'
import { Link } from 'react-router-dom';
import CheckCircle from '../icons/CheckCircle';

const Step3RegistrationComplete = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <img src='./2714.svg' className='w-3/5'/>
      <h2 className='pb-4 font-bold text-2xl text-center text-sky-500'>
        Registration Complete!
      </h2>
      <h3>
        Log in to your account to get started!
      </h3>
      <Link to='/login' className='text-slate-500 hover:underline'>
        Take me to the login page!
      </Link>
    </div>
  )
}

export default Step3RegistrationComplete;