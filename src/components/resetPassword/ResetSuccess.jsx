import React from 'react'
import { Link } from 'react-router-dom'
import CheckBadge from '../icons/CheckBadge'

const ResetSuccess = () => {
  return (
    <div className='w-full h-1/2 flex flex-col justify-evenly items-center bg-white border-[1px] border-[#e6e6e6] p-4 rounded-lg shadow-lg md:w-2/6 md:h-5/6'>
      
    <CheckBadge />
    
    <h2 className='pb-4 font-bold text-2xl text-center text-purple-500'>
      Reset Complete
    </h2>

    <p className='text-center px-2'>
      Your new password has been set!
    </p>
    
    <Link to='/login' className='text-[#F76301] hover:underline'>
      Take me to the login page!
    </Link>
  
  </div>
  )
}

export default ResetSuccess