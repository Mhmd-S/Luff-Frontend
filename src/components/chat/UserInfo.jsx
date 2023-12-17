import React from 'react';
import getAge from '../utils/getAge';
import useUserInfo from './hooks/useUserInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const UserInfo = ({
	userInfo,
	setShowSmallModal,
	showUserInfo,
	setShowUserInfo,
}) => {
	const { renderImages } = useUserInfo(userInfo);

	return (
		<div
			className={`absolute w-full h-full bg-white z-30 border-l-[1px] flex flex-col items-center py-4 transition-all ease-in-out ${
				showUserInfo ? 'w-full opacity-100 translate-x-0 md:translate-x-[55%]' : 'w-0 opacity-0'
			} md:w-1/3 md:h-[95%] md:rounded-r-lg md:shadow-md`}
		>
			<FontAwesomeIcon
				icon={faTimes}
				className="absolute top-4 right-4 text-2xl text-[#a168ff] cursor-pointer"
				onClick={() => setShowUserInfo(false)}
			/>
			<img
				src={userInfo.profilePictures[0]}
				alt="User Profile Picture"
				className="w-2/5 object-cover object-center rounded-full"
			/>
			<p className="text-lg font-bold mt-4">{userInfo.name}</p>
			<p className="text-sm text-gray-400">
				{getAge(userInfo.dob)} years old
			</p>
			<p className="text-sm font-semibold p-6">{userInfo.bio}</p>
			<div className="w-full grid grid-cols-3 grid-rows-2 gap-2 px-4">
				{renderImages()}
			</div>
			<div>
				<button
					onClick={() => setShowSmallModal(1)}
					className="border-b-2"
				>
					Report
				</button>
				<button onClick={() => setShowSmallModal(2)}>Block</button>
			</div>
		</div>
	);
};

export default UserInfo;
