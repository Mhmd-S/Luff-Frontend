import React from 'react'
import Login from '../components/login/Login'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className='w-screen h-screen flex flex-col items-center relative'>

      <div className='flex justify-between items-center bg-[#fafafa]  w-full h-[7%] px-4 border-b-[1px] border-b-slate-300 mb-4 md:h-[12.5%]'>
          
        <Link to='/'>
          <h1 className='text-3xl text-slate-900' >
            Luff
          </h1>
        </Link>

        <div>
            
          <Link to='/registration'>
            <button className={`w-fit h-fit text-sm py-3 px-4 shadow-[0px_0px_2px_2px_rgb(124,124,124,0.4)] rounded-lg hover:bg-gray-100`} >
              Signup
            </button>
          </Link>

        </div>

      </div>

      <Login/>
      
    </div>
  )
}

export default LoginPage