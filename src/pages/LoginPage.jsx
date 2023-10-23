import React from 'react'
import Login from '../components/login/Login'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className='w-screen h-screen px-4 flex flex-col justify-center items-center relative'>
      
      <div className='absolute inset-0 bg-[url(/beams-home@95.jpg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(0,0,0,0.5))]'>
      </div>
      
        <h1 className='text-3xl text-slate-900 mb-4 relative' >
          Welcome Back to Luff!
        </h1>

      <Login/>
      
    </div>
  )
}

export default LoginPage