import React from 'react';
import Login from '../components/login/Login';
import { Link } from 'react-router-dom';

const LoginPage = () => {
	return (
		<div className="w-screen h-screen  relative bg-[#fafafa] grid grid-cols-1 grid-rows-[10%_90%] md:grid-rows-[15%_85%]">
			
      <div className='w-full flex justify-center items-center'>
        <img src='./logo1.png' alt='logo' className='h-3/4'/>
        <h1 className=' text-3xl font-8bit font-bold text-purple-500 md:text-5xl'>
          UniLuff
        </h1>
      </div>

			<Login />
		</div>
	);
};

export default LoginPage;
