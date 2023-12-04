import React from 'react';
import useMatching from './hooks/useMatching';
import LoadingIcon from '../icons/LoadingIcon';
import ControlsGuide from './ControlsGuide';


const Matching = () => {
	const { renderUser, loading } = useMatching();

	return (
		<div className="relative w-full h-full flex justify-center items-center py-2">
			{loading ? <LoadingIcon /> : renderUser()}
			<ControlsGuide />
		</div>
	);
};

export default Matching;
