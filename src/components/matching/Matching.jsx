import React from 'react';
import useMatching from './hooks/useMatching';
import LoadingIcon from '../icons/LoadingIcon';
import ControlsGuide from './ControlsGuide';


const Matching = () => {
	const { renderUser, loading } = useMatching();

	return (
		<div className="relative w-full h-full flex justify-center items-center md:grid md:grid-cols-1 md:grid-rows-[10%_80%_10%] md:place-items-center md:py-2">
			<div className='hidden md:flex justify-evenly items-center w-2/12'>
				<img src="./logo1.png" alt="logo" className="w-16" />
				<h1 className="text-4xl font-semibold text-purple-600 text-center">
					LUFF
				</h1>
			</div>
			{loading ? <LoadingIcon /> : renderUser()}
			<ControlsGuide />
		</div>
	);
};

export default Matching;
