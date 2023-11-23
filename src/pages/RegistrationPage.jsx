import React from 'react';
import Registration from '../components/registration/Registration';
import { RegistrationProvider } from '../components/registration/context/useRegistrationContext';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
	return (
		<div className="w-screen h-screen overflow-x-hidden  relative bg-[#fafafa] flex flex-col">
			<div className="w-ful h-20 flex justify-center items-center">
				<img src="./logo1.png" alt="logo" className="h-1/2 " />
				<h1 className=" text-4xl font-8bit font-bold text-purple-500">
					LUFF
				</h1>
			</div>
			<RegistrationProvider>
				<Registration />
			</RegistrationProvider>
		</div>
	);
};

export default RegistrationPage;
