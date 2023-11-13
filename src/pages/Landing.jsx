import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    // add background image
    <div className='w-screen h-screen relative grid grid-cols-1 grid-rows-[7%_93%] md:grid-rows-[12.5%_87.5%] '>
    
      <div className='flex justify-center bg-[#fafafa] items-center w-full h-full px-4 border-b-[1px] border-b-slate-300 mb-4'>
        <Link to='/'>
          <h1 className='text-3xl text-slate-900' >
            Luff
          </h1>
        </Link>
      </div>

      <div className='w-full h-full flex flex-col justify-center items-center'>
        
        <h1 className='text-slate-900 text-6xl md:text-8xl font-bold flex flex-col md:flex-row'>
          <span className='relative bg-purple-500 bg-clip-text text-transparent  before:block before:content-["Discover."] before:w-full before:absolute before:-bottom-1 before:left-1 before:bg-slate-900 before:bg-clip-text before:animte-pulse '>
            Discover.
          </span>
          <span className='relative bg-green-500 bg-clip-text text-transparent  before:block before:content-["Match."] before:w-full before:absolute before:-bottom-1 before:left-1 before:bg-slate-900 before:bg-clip-text before:animte-pulse '>
            Match.
          </span>
          <span className='relative bg-red-500 bg-clip-text text-transparent  before:block before:content-["Chat."] before:w-full before:absolute before:-bottom-1 before:left-1 before:bg-slate-900 before:bg-clip-text before:animte-pulse '>
            Chat.
          </span>
        </h1>

        <h3 className='w-2/3 py-10 md:text-center text-xl md:text-2xl text-gray-500'>
          Empower your university journey with our app, designed to help you meet fellow students and create lasting friendships on campus.
        </h3>

        <div className='w-full md:w-1/3 flex flex-row justify-evenly items-center'>

          <Link to='/login'>
            <button className='bg-slate-900 text-white text-xl px-6 py-3 rounded-md'>Login</button>
          </Link>

          <Link to='/registration'>
            <button className='text-slate-900 shadow-[0px_0px_35px_5px_#ef4444] animate-[wiggle_8s_linear_infinite] delay-150 text-xl px-6 py-3 rounded-md'>Sign Up</button>
          </Link>

        </div>
      
      </div>

    </div>
  )
}

export default Landing