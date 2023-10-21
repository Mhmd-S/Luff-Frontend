import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    // add background image
    <div className='w-screen h-screen relative flex flex-col justify-center items-center'>

      <header className='absolute bg-[#fafafa] top-0 w-full py-4 border-b-2'>
        logo
      </header>
        
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
  )
}

export default Landing