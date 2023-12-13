import React from 'react';
import ImageCarousel from './ImageCarousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faClose } from '@fortawesome/free-solid-svg-icons';
import CardDetailsDesktop from './CardDetailsDesktop';
import useCardDesktop from './hooks/useCardDesktop';

const CardDesktop = ({ userInfo, handleReject, handleLike, dummyCard }) => {

	const {
		renderSmallModal,
		setShowMiniMenu,
		setShowSmallModal,
		showMiniMenu,
	} = useCardDesktop(userInfo, handleLike, handleReject, dummyCard);

	return (
		<div className="hidden md:grid relative w-2/3 h-full grid-cols-2 grid-rows-1">
			<ImageCarousel
				images={userInfo.profilePictures}
				dummyCard={dummyCard}
			/>

			<CardDetailsDesktop userInfo={userInfo} showMiniMenu={showMiniMenu} setShowSmallModal={setShowSmallModal} setShowMiniMenu={setShowMiniMenu} />

			<div className="absolute bottom-0 w-1/2 flex justify-evenly items-center pb-6 z-10 right-0">
				<span
					className=" p-3 text-purple-500 border-purple-500 border-4 rounded-full cursor-pointer flex items-center justify-center transition-all hover:bg-purple-500 hover:text-white"
					onClick={handleLike}
				>
					<FontAwesomeIcon icon={faHeart} className=" w-10 h-10" />
				</span>
				<span
					className="p-3 border-my-orange text-my-orange border-4 rounded-full cursor-pointer flex items-center justify-center transition-all hover:bg-my-orange hover:text-white"
					onClick={handleReject}
				>
					<FontAwesomeIcon icon={faClose} className=" w-10 h-10" />
				</span>
			</div>
			{renderSmallModal()}
		</div>
	);
};

export default CardDesktop;
