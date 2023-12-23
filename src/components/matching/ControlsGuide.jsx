import React from 'react';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ControlsGuide = () => {
	return (
		<div className="hidden w-3/5 p-2 rounded-lg md:flex text-[#737474] items-center justify-center font-semibold [&>*]:text-xs [&>*]:flex [&>*]:items-center [&>*]:[&>*]:ml-3">
			<span>
				<FontAwesomeIcon
					icon={faArrowLeft}
					className="text-xs border-[2px] border-[#737474] rounded-md p-[2px]"
				/>
				<span>Like</span>
			</span>
			<span>
				<FontAwesomeIcon
					icon={faArrowRight}
					className="text-xs border-[2px] border-[#737474] rounded-md p-[2px]"
				/>
				<span>Dislike</span>
			</span>
			<span>
				<div className="w-9 h-3 border-2 border-[#737474] rounded-sm"></div>
				<span>Next Pic</span>
			</span>
		</div>
	);
};

export default ControlsGuide;
