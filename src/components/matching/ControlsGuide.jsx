import React from 'react';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ControlsGuide = () => {
	return (
		<div className="hidden bg-white border-[1.5px] border-[#F76301] p-6 rounded-lg shadow-lg md:absolute md:flex md:flex-col md:w-1/5 md:h-2/5 md:top-[10%] right-[5%]">
			<h3 className="w-full text-center text-xl font-semibold text-purple-500">
				Game Controls
			</h3>
			<div className="w-full h-full text-slate-900 grid grid-cols-2 auto-rows-auto grid-flow-row place-items-center font-semibold">
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
		</div>
	);
};

export default ControlsGuide;
