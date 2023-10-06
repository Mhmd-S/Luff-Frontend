import React from 'react'
import Registration from '../components/registration/Registration'
import { RegistrationProvider } from '../components/registration/context/useRegistrationContext'

const RegistrationPage = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center relative font-Inter'>
      
      <div className='absolute inset-0 bg-[url(/beams-home@95.jpg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(0,0,0,0.5))]'>
      </div>
        <h1 className='text-3xl text-slate-900 mb-4 relative' >
          Welcome to Luff
        </h1>
      <RegistrationProvider>
        <Registration />
      </RegistrationProvider>
    </div>
  )
}

export default RegistrationPage;


// <span className="text-2xl bg-300% font-bold bg-gradient-to-r from-[#90d2f8] via-[#f1b7ff] to-[#8992f8] text-transparent bg-clip-text animate-gradient">Luff</span>
