import React from 'react';
import useCardDetails from './hooks/useCardDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const CardDetails = ({ userInfo, setShowSmallModal }) => {
	const { openCard, handleOpenCard, handleCloseCard, getAge } =
		useCardDetails();

	return (
		<div
			className={`w-full flex flex-col absolute ${
				openCard
					? 'text-black h-fit bottom-0 pb-20 bg-white justify-between min-h-[60%]'
					: 'text-white bottom-0 mb-20'
			} z-30 md:rounded-b-xl`}
		>
			<div
				className={`w-full flex items-center justify-between p-4 ${
					openCard ? 'border-y-2 border-black' : 'mb-16'
				}`}
			>
				<div className="w-4/5 flex">
					<p className={`w-4/6 text-4xl font-bold truncate`}>
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
			<p className={`${!openCard && 'hidden'} p-3 first:w-full`}>
				{userInfo.bio}
			</p>
			{openCard && (
				<div className="w-full flex flex-col mb-14 items-center border-y-2 [&>*]:w-full [&>*]:py-4">
					<button
						onClick={() => setShowSmallModal(1)}
						className="border-b-2"
					>
						Report
					</button>
					<button onClick={() => setShowSmallModal(2)}>Block</button>
				</div>
			)}
		</div>
	);
};

export default CardDetails;
