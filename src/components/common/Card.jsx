import React from 'react';
import ImageCarousel from './ImageCarousel';
import HeartIcon from '../icons/HeartIcon';
import CrossIcon from '../icons/CrossIcon';
import CardDetails from './CardDetails';

const Card = ({ userInfo, handleReject, handleLike, dummyCard }) => {
	return (
		<div className="relative w-full h-full flex flex-col items-center md:w-2/5 md:hidden">
			<ImageCarousel
				images={userInfo.profilePictures}
				handleLike={handleLike}
				handleReject={handleReject}
				dummyCard={dummyCard}
			/>

			<CardDetails userInfo={userInfo} />

			<div className="absolute bottom-0 w-full flex justify-evenly items-center pb-6 z-40 md:border-b-xl">
				<span
					className="p-3 border-purple-500 border-4 rounded-full cursor-pointer"
					onClick={handleLike}
				>
					<HeartIcon />
				</span>

				<span
					className="p-3 border-my-orange border-4 rounded-full cursor-pointer"
					onClick={handleReject}
				>
					<CrossIcon />
				</span>
			</div>
		</div>
	);
};

export default Card;
