import React from 'react';
import useCardDetails from './hooks/useCardDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faInfo,
	faArrowDown,
	faHeart,
	faClose,
	faFlag,
} from '@fortawesome/free-solid-svg-icons';

const CardDetails = ({
	userInfo,
	setShowSmallModal,
	handleLike,
	handleReject,
}) => {
	const { openCard, handleOpenCard, handleCloseCard, getAge } =
		useCardDetails();

	return (
		<div
			className={`w-full flex flex-col absolute bottom-0 font-semibold text-lg transition-all ease-in-out z-30 ${
				openCard
					? 'text-black h-fit bg-white justify-between'
					: 'text-white h-2/5'
			} `}
		>
			<div
				className={`w-full flex items-center justify-between p-4 ${
					openCard ? 'border-y-2 border-black' : ''
				}`}
			>
				<div className={`w-4/5 flex ${openCard && 'text-[#3b93a1]'}`}>
					<p className="w-5/6 text-4xl font-bold truncate">
						{userInfo.name}
					</p>
					<p className="text-4xl mx-3 font-semibold">
						{getAge(userInfo.dob)}
					</p>
				</div>
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
			<div
				className={`${
					openCard ? 'h-fit opacity-100' : 'h-0 opacity-0'
				} transition-all ease-in p-3 first:w-full`}
			>
				<div className='py-2 underline'>
					About <span className='text-[#3b93a1]'>{userInfo.name}</span>:
				</div>
				{userInfo.bio}
			</div>
			<div
				className={`w-full ${
					openCard ? 'h-fit opacity-100 py-4' : 'h-0 opacity-0 '
				} transition-all ease-in flex items-center justify-center`}
			>
				<FontAwesomeIcon
					icon={faFlag}
					className="w-4 h-4 p-2 rounded-full bg-white text-slate-900"
				/>
				<button onClick={() => setShowSmallModal(1)}>
					Block and Report
				</button>
			</div>

			<div className=" w-full flex justify-evenly items-center pb-10 z-40 md:border-b-xl">
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
		</div>
	);
};

export default CardDetails;
