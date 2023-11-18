import React from 'react'
import Login from '../components/login/Login'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center relative bg-[#fafafa]'>
            
      <Login/>
      
    </div>
  )
}

export default LoginPage