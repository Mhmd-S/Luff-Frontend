import React from 'react'
import { Link } from 'react-router-dom'

const Matched = ({ userInfo, handleClick }) => {
  return (
    <div className="w-full h-full relative flex items-center justify-center after:absolute after:w-full after:h-3/4 after:content-[''] after:bg-gradient-to-t after:from-black after:to-transparent after:bottom-0 after:z-10 after:block after:left-0 md:w-1/3 md:rounded-lg md:after:rounded-lg">
        
        {/* User's Picutre */}
        <img className="w-full h-full object-cover rounded-lg" src='./joh.jpg' alt={`Image`} />  
        

        <div className='w-full h-full absolute flex flex-col items-center pt-8 z-20 text-white md:rounded-b-lg'>
            
        <h1 className='text-slate-900 text-6xl md:text-6xl font-bold flex flex-col md:flex-row'>
                <span className='relative bg-black bg-clip-text text-transparent before:block before:content-["MATCH!"] before:w-full before:absolute before:-bottom-2  before:left-2 before:bg-purple-500 before:bg-clip-text before:animte-pulse'>
                    MATCH!
                </span>
            </h1>

            <h3 className='text-xl mt-[20rem] text-center md:mt-[14.2rem]'>
                Start chatting with <p className='font-bold underline'>{userInfo.name}</p> now!
            </h3>
            
            <button className='mt-6 text-lg text-slate-900 bg-white p-3 rounded-xl' onClick={handleClick}>
                Keep swiping
            </button>

        </div>

    </div>
  )
}

export default Matched