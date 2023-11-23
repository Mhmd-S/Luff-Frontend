import React from 'react';
import Onboarding from '../components/onboarding/Onboarding';

const OnboardingPage = () => {
	return (
		<div className="w-screen h-screen overflow-x-hidden relative bg-[#fafafa] flex flex-col">
			<div className="w-full h-20 flex justify-center items-center">
				<img src="./logo1.png" alt="logo" className="h-1/2" />
				<h1 className=" text-4xl font-8bit font-bold text-purple-500">
					LUFF
				</h1>
			</div>
			<Onboarding />
		</div>
	);
};

export default OnboardingPage;
