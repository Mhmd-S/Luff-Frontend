import React from 'react';
import useMatching from './hooks/useMatching';
import LoadingIcon from '../icons/LoadingIcon';
import ControlsGuide from './ControlsGuide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTimes } from '@fortawesome/free-solid-svg-icons';

const Matching = () => {
	const { renderUser, renderSmallModal, matched, animateLike, animateReject, loading } = useMatching();

	return (
		<div className="relative w-full h-full flex justify-center items-center md:grid md:grid-cols-1 md:grid-rows-[10%_80%_10%] md:place-items-center md:py-2">
			<div className="hidden md:flex justify-evenly items-center w-1/12">
				<img src="./logo1.png" alt="logo" className="w-12" />
				<h1 className="text-3xl font-semibold text-purple-600 text-center">
					LUFF
				</h1>
			</div>
			{loading ? <LoadingIcon /> : renderUser()}
			{!matched && <ControlsGuide />}
			{animateLike && (
				<div className="absolute w-1/4 md:w-1/12 aspect-square bg-purple-500 rounded-full animate-ping">
					<FontAwesomeIcon
						icon={faHeart}
						className="text-white text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
					/>
				</div>
			)}
			{animateReject && (
				<div className="absolute w-1/4 md:w-1/12 aspect-square bg-my-orange rounded-full animate-ping">
					<FontAwesomeIcon
						icon={faTimes}
						className="text-white text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
					/>
				</div>
			)}
		</div>
	);
};

export default Matching;
