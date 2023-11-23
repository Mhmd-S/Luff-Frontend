import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
	return (
		// add background image
		<div className="w-screen h-screen relative grid grid-cols-2 grid-rows-1 items-center">

			<div className='w-full h-full p-1 flex items-center justify-center'>
				<h1 className="p-5 text-my-orange text-5xl md:text-8xl font-bold flex flex-col  bg-[url(./polka-dots.svg)] rounded-md ">
					<span className="relative">Discover</span>
					<span className="relative ">Match</span>
					<span className="relative">Chat</span>
				</h1>
			</div>

			<div>
				<h3 className="w-2/3 py-10 md:text-center text-xl md:text-2xl text-gray-500">
					Empower your university journey with our app, designed to
					help you meet fellow students and create lasting friendships
					on campus.
				</h3>

				<div className="w-full md:w-1/3 flex flex-row justify-evenly items-center">
					<Link to="/login">
						<button className="bg-slate-900 text-white text-xl px-6 py-3 rounded-md">
							Login
						</button>
					</Link>

					<Link to="/registration">
						<button className="text-slate-900 shadow-[0px_0px_35px_5px_#ef4444] animate-[wiggle_8s_linear_infinite] delay-150 text-xl px-6 py-3 rounded-md">
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Landing;
