import React from 'react';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ControlsGuide = () => {
	return (
		<div className="hidden w-2/5 p-2 rounded-lg md:flex text-[#515252] items-center justify-evenly font-semibold [&>*]:flex [&>*]:items-center [&>*]:[&>*]:mr-2">
			<span>
				<FontAwesomeIcon
					icon={faArrowLeft}
					className="text-md border-[3px] border-[#515252] rounded-lg p-1"
				/>
				<span>Like</span>
			</span>
			<span>
				<FontAwesomeIcon
					icon={faArrowRight}
					className="text-md border-[3px] border-[#515252] rounded-lg p-1"
				/>
				<span>Dislike</span>
			</span>
			<span>
				<div className="w-9 h-3 border-[3px] border-[#515252] rounded-sm"></div>
				<span>Next Pic</span>
			</span>
		</div>
	);
};

export default ControlsGuide;
