import React from 'react'
import Registration from '../components/registration/Registration'
import { RegistrationProvider } from '../components/registration/context/useRegistrationContext'
import { Link } from 'react-router-dom'

const RegistrationPage = () => {
  return (
    <div className='w-screen h-screen flex flex-col items-center relative'>
      
      <div className='flex justify-between items-center w-full h-[7%] px-4 border-b-[1px] border-b-slate-300 mb-4 md:h-[12.5%]'>
          
          <Link to='/'>
            <h1 className='text-3xl text-slate-900' >
              Luff
            </h1>
          </Link>

          <div>
            
            <Link to='/login'>
              <button className={`w-fit h-fit text-sm py-3 px-4 shadow-[0px_0px_2px_2px_rgb(124,124,124,0.4)] rounded-lg hover:bg-gray-100`} >
                Log In
              </button>
            </Link>

          </div>

        </div>
        
      <RegistrationProvider>
        <Registration />
      </RegistrationProvider>
    </div>
  )
}

export default RegistrationPage;


// <span className="text-2xl bg-300% font-bold bg-gradient-to-r from-[#90d2f8] via-[#f1b7ff] to-[#8992f8] text-transparent bg-clip-text animate-gradient">Luff</span>
