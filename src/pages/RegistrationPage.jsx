import React from 'react'
import Registration from '../components/registration/Registration'
import { RegistrationProvider } from '../components/registration/context/useRegistrationContext'
import { Link } from 'react-router-dom'

const RegistrationPage = () => {
  return (
    <div className='w-screen h-screen flex flex-col items-center relative'>  
      <RegistrationProvider>
        <Registration />
      </RegistrationProvider>
    </div>
  )
}

export default RegistrationPage;


// <span className="text-2xl bg-300% font-bold bg-gradient-to-r from-[#90d2f8] via-[#f1b7ff] to-[#8992f8] text-transparent bg-clip-text animate-gradient">Luff</span>
