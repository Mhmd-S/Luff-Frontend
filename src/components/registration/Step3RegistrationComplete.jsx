import React from 'react'
import { Link } from 'react-router-dom';
import Cake from '../icons/Cake'; 

const Step3RegistrationComplete = () => {
  return (
    <div className='w-full h-1/2 flex flex-col justify-evenly items-center bg-white border-[1.5px] border-my-orange p-4 rounded-lg shadow-lg md:w-2/6 md:h-5/6'>
      
      <Cake />
      
      <h2 className='pb-4 font-bold text-2xl text-center text-purple-500'>
        Registration Complete!
      </h2>

      <p className='text-center px-2'>
        A few steps away from meeting your new friends!
      </p>
      
      <Link to='/login' className='text-[#F76301] hover:underline'>
        Take me to the login page!
      </Link>
    
    </div>
  )
}

export default Step3RegistrationComplete;