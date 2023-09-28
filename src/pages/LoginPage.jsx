import React from 'react'
import Login from '../components/login/Login'

const LoginPage = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center relative'>
      
      <div className='absolute inset-0 bg-[url(/beams-home@95.jpg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(0,0,0,0.5))]'>
      </div>
        <h1 className='text-3xl text-slate-900 font-bold mb-4 relative' >
          Welcome back to Luff!
        </h1>

      <Login/>
      
    </div>
  )
}

export default LoginPage