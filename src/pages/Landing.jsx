import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
	return (
		<div className="w-screen h-screen relative grid grid-cols-1 grid-rows-[10%_45%_45%] place-items-center">
			<div className="w-full h-full flex items-center p-3">
				<img src="./logo1.png" alt="logo" className="h-6 mr-2" />
				<h1 className=" text-md font-8bit font-bold text-purple-500 md:text-lg">
					UniLuff
				</h1>
			</div>
			<h2 className=" text-slate-800 text-5xl md:text-4xl  flex flex-col items-center justify-evenly">
				<span>Looking to make friends at university?</span>
				<div className="w-1/4 flex justify-center items-center">
					<img src="./logo1.png" alt="logo" className="h-16" />
					<h1 className=" text-3xl font-8bit font-bold text-purple-500 md:text-5xl">
						UniLuff
					</h1>
				</div>
				<span>is here to help!</span>
			</h2>

			<div className="w-full h-full md:w-full flex flex-col justify-evenly items-center">
				<Link to="/registration" className="w-full flex justify-center">
					<button className="w-1/4 text-slate-900 shadow-[0px_0px_35px_5px_#ef4444] animate-[wiggle_8s_linear_infinite] delay-150 text-xl px-6 py-3 rounded-3xl">
						Sign Up
					</button>
				</Link>

				<Link to="/login" className="w-full flex justify-center">
					<button className="w-1/4 bg-slate-900 text-white text-xl px-6 py-3 rounded-3xl">
						Login
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Landing;
