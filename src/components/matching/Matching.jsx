import React from 'react';
import useMatching from './hooks/useMatching';
import LoadingIcon from '../icons/LoadingIcon';
import ControlsGuide from './ControlsGuide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTimes } from '@fortawesome/free-solid-svg-icons';

const Matching = () => {
	const { renderUser, matched, animateLike, animateReject, loading } =
		useMatching();

	return (
		<div className="relative w-full h-full flex justify-center items-center md:select-none md:grid md:grid-cols-1 md:grid-rows-[10%_84%_6%] md:place-items-center md:py-2">
			<div className="hidden md:flex justify-evenly items-center w-1/12">
				<img src="/logo1.png" alt="logo" className="w-12" />
				<h1 className="text-3xl font-semibold text-purple-600 text-center">
					LUFF
				</h1>
			</div>

			{loading ? <LoadingIcon /> : renderUser()}

			{!matched && <ControlsGuide />}

			{animateLike && (
				<div className="absolute w-full h-full flex items-center justify-center animate-whiteWash">
					<FontAwesomeIcon
						icon={faHeart}
						className="text-white bg-purple-500 p-4 rounded-full text-5xl animate-likeAndDislike"
					/>
				</div>
			)}

			{animateReject && (
				<div className="absolute w-full h-full flex items-center justify-center animate-whiteWash">
					<FontAwesomeIcon
						icon={faTimes}
						className="text-white bg-my-orange p-3 px-5 rounded-full text-5xl animate-likeAndDislike"
					/>
				</div>
			)}
		</div>
	);
};

export default Matching;
