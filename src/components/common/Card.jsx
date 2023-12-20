import React from 'react';
import ImageCarousel from './ImageCarousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faClose } from '@fortawesome/free-solid-svg-icons';
import CardDetails from './CardDetails';
import useCard from './hooks/useCard';

const Card = ({ userInfo, handleReject, handleLike, dummyCard }) => {
	const { renderSmallModal, setShowSmallModal } = useCard(
		userInfo,
		dummyCard
	);

	return (
		<div className="relative w-full h-full flex flex-col items-center md:w-2/5 md:hidden">
			<ImageCarousel
				images={userInfo.profilePictures}
				handleLike={handleLike}
				handleReject={handleReject}
				dummyCard={dummyCard}
			/>

			<CardDetails
				userInfo={userInfo}
				setShowSmallModal={setShowSmallModal}
				handleLike={handleLike}
				handleReject={handleReject}
			/>

			
			{renderSmallModal()}
		</div>
	);
};

export default Card;
