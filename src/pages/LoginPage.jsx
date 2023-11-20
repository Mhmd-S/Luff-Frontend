import React from 'react'
import Login from '../components/login/Login'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center relative bg-[#fafafa]'>

          <div className='w-full flex justify-between p-4'>
            <h1>
              Logo
            </h1>

          <ul className='flex items-center justify-evenly w-1/4'>
            
            <li>
              <Link to='/settings'>
                Contact
              </Link>
            </li>

            <li>
              <Link to='/signup'>
                Signup
              </Link>
            </li>
            
          </ul>
        
        </div>

      <Login/>
      
    </div>
  )
}

export default LoginPage