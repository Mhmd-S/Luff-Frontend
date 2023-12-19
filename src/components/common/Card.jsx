import React from 'react';
import ImageCarousel from './ImageCarousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faClose } from '@fortawesome/free-solid-svg-icons';
import CardDetails from './CardDetails';
import useCard from './hooks/useCard';

const Card = ({ userInfo, handleReject, handleLike, dummyCard }) => {

	const {
		renderSmallModal,
		setShowSmallModal,
	} = useCard(userInfo, dummyCard);

	return (
		<div className="relative w-full h-full flex flex-col items-center md:w-2/5 md:hidden">
			<ImageCarousel
				images={userInfo.profilePictures}
				handleLike={handleLike}
				handleReject={handleReject}
				dummyCard={dummyCard}
			/>

			<CardDetails userInfo={userInfo} setShowSmallModal={setShowSmallModal} />

			<div className="absolute bottom-0 w-full flex justify-evenly items-center pb-6 z-40 md:border-b-xl">
			<span
					className="p-4 text-purple-500 border-purple-500 border-4 rounded-full cursor-pointer flex items-center justify-center transition-all hover:bg-purple-500 hover:text-white"
					onClick={handleLike}
				>
					<FontAwesomeIcon icon={faHeart} className=" w-14 h-14" />
				</span>

				<span
					className=" p-4 border-my-orange text-my-orange border-4 rounded-full cursor-pointer flex items-center justify-center transition-all hover:bg-my-orange hover:text-white"
					onClick={handleReject}
				>
					<FontAwesomeIcon icon={faClose} className=" w-14 h-14" />
				</span>
			</div>
			{renderSmallModal()}
		</div>
	);
};

export default Card;
