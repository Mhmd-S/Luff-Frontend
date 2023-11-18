import React from 'react'
import LoginForm from './LoginForm'

const Login = () => {
  return (
    <div className='relative w-5/6 h-5/6 rounded-xl items-center p-4 flex flex-col md:h-full md:w-full md:grid md:grid-cols-2 md:grid-rows-1 md:place-items-center lg:w-full lg:h-full'>

      <div className='w-4/5 text-slate-900 text-5xl text-center mb-4 md:h-3/4 md:flex md:flex-col md:justify-evenly md:text-left md:text-8xl md:pl-10'>
       
        <p className='text-purple-500 font-bold w-full'>
          Luff
        </p>

        <p className='hidden text-slate-900 md:text-2xl md:block'>
          Empower your university journey with our app, designed to help you meet fellow students and create lasting friendships on campus.
        </p>
      
      </div>

      <LoginForm />
   
    </div>
  )
}

export default Login