import React from 'react';
import useCardDetails from './hooks/useCardDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const CardDetails = ({ userInfo }) => {
	const { openCard, handleOpenCard, handleCloseCard, getAge } =
		useCardDetails();

	return (
		<div
			className={`w-full flex flex-col absolute ${
				openCard
					? 'text-black h-fit bottom-0 pb-20 bg-white'
					: 'text-white bottom-0 mb-20'
			} z-10 md:rounded-b-xl`}
		>
			<div
				className={`w-full flex items-center p-4 ${
					openCard ? 'border-y-2 border-black' : 'mb-7'
				}`}
			>
				<p className={`text-4xl font-bold`}>{userInfo.name}</p>
				<p className="text-4xl mx-3 font-semibold">
					{getAge(userInfo.dob)}
				</p>
				<div className="flex items-center justify-center ml-4 z-50">
					{openCard ? (
						<FontAwesomeIcon
							icon={faArrowDown}
							className="w-4 h-4 p-2 rounded-full bg-white text-slate-900 border-slate-900 border-2"
							onClick={handleCloseCard}
						/>
					) : (
						<FontAwesomeIcon
							icon={faInfo}
							className="w-4 h-4 p-2 rounded-full bg-white text-slate-900"
							onClick={handleOpenCard}
						/>
					)}
				</div>
			</div>
			<p className={`${!openCard && 'hidden'} p-3 mb-10`}>
				{userInfo.bio}
			</p>
		</div>
	);
};

export default CardDetails;
