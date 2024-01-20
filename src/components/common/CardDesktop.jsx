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
		showSmallModal,
	} = useCardDesktop(userInfo, handleLike, handleReject, dummyCard);

	return (
		<>
			<div className="hidden md:grid relative w-2/3 h-full grid-cols-2 grid-rows-1 shadow-md rounded-xl animate-fadeIn select-none">
				<ImageCarousel
					images={userInfo.profilePictures}
					dummyCard={dummyCard || showSmallModal}
				/>

				<CardDetailsDesktop
					userInfo={userInfo}
					showMiniMenu={showMiniMenu}
					setShowSmallModal={setShowSmallModal}
					setShowMiniMenu={setShowMiniMenu}
				/>

				<div className="absolute bottom-0 w-1/2 flex justify-evenly items-center pb-6 z-10 right-0">
					<span
						className=" p-3 bg-purple-500 text-white border-transparent border-4 rounded-full cursor-pointer flex items-center justify-center transition-all hover:text-purple-500 hover:bg-white hover:border-purple-500"
						onClick={handleLike}
					>
						<FontAwesomeIcon
							icon={faHeart}
							className=" w-10 h-10"
						/>
					</span>
					<span
						className="p-3 bg-my-orange text-white border-4 rounded-full cursor-pointer flex items-center border-transparent justify-center transition-all hover:text-my-orange hover:bg-white hover:border-my-orange "
						onClick={handleReject}
					>
						<FontAwesomeIcon
							icon={faClose}
							className=" w-10 h-10"
						/>
					</span>
				</div>
			</div>
			{renderSmallModal()}
		</>
	);
};

export default CardDesktop;
