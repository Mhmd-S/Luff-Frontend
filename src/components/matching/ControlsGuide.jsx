import React from 'react';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ControlsGuide = () => {
	return (
		<div className="hidden w-2/5 bg-white border-[2px] border-[#3b93a1] p-2 rounded-lg shadow-lg md:flex text-[#014751] items-center justify-evenly font-semibold [&>*]:px-4">
			<FontAwesomeIcon
				icon={faArrowLeft}
				className="text-xl text-purple-500 border-2 border-purple-500 rounded-lg p-1"
			/>
			<span>Like</span>
			<FontAwesomeIcon
				icon={faArrowRight}
				className="text-xl text-purple-500 border-2 border-purple-500 rounded-lg p-1"
			/>
			<span>Dislike</span>
			<div className="w-9 h-3 border-2 border-purple-500 rounded-sm"></div>
			<span>Next Pic</span>
		</div>
	);
};

export default ControlsGuide;
