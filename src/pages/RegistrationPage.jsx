import React from 'react';
import Registration from '../components/registration/Registration';
import { RegistrationProvider } from '../components/registration/context/useRegistrationContext';

const RegistrationPage = () => {
	return (
		<div className="w-screen h-screen overflow-x-hidden  relative bg-[#fafafa] flex flex-col justify-center items-center">
			<div className="w-full h-24 flex justify-center items-center">
				<img src="./logo1.png" alt="logo" className="h-3/4" />
				<h1 className=" text-3xl font-8bit font-bold text-purple-500">
					UniLuff
				</h1>
			</div>
			<RegistrationProvider>
				<Registration />
			</RegistrationProvider>
		</div>
	);
};

export default RegistrationPage;
