import React from 'react';
import getAge from '../utils/getAge';
import useUserInfo from './hooks/useUserInfo';
import UserInfoShowImage from './UserInfoShowImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const UserInfo = ({
	userInfo,
	setShowSmallModal,
	showUserInfo,
	setShowUserInfo,
}) => {
	const { renderImages, showImage, setShowImage } = useUserInfo(userInfo);

	return (
		<div
			className={`absolute w-full h-full bg-white z-30 border-l-[1px] flex flex-col items-center py-4 transition-all ease-in-out ${
				showUserInfo
					? 'w-full opacity-100 scale-x-1 translate-x-0 md:translate-x-[80%]'
					: 'w-0 opacity-0 scale-x-0 md:translate-x-[75%]'
			} md:w-1/3 md:h-[85%] md:rounded-r-lg md:shadow-md  md:border-l-2 md:border-purple-500`}
		>
			<FontAwesomeIcon
				icon={faTimes}
				className="absolute top-4 right-4 text-2xl text-[#a168ff] cursor-pointer"
				onClick={() => setShowUserInfo(false)}
			/>
			<img
				src={userInfo.profilePictures[0]}
				alt="User Profile Picture"
				className="h-1/5 aspect-square object-cover object-center rounded-full"
			/>
			<p className="text-lg font-bold mt-4">{userInfo.name}</p>
			<p className="text-sm text-gray-400">
				{getAge(userInfo.dob)} years old
			</p>
			<p className="h-1/4 w-full text-sm font-semibold px-6 py-2">
				{userInfo.bio}
			</p>
			<div className="h-1/3 w-full grid grid-cols-3 grid-rows-2 gap-2 px-4">
				{renderImages()}
			</div>
			<div className="mt-5 flex flex-row items-center justify-center text-gray-400 text-sm">
				<button
					onClick={() => setShowSmallModal(1)}
					className="border-r-2 px-2 hover:text-my-orange"
				>
					Report
				</button>
				<button
					className="px-2 hover:text-my-orange"
					onClick={() => setShowSmallModal(2)}
				>
					Block
				</button>
			</div>
			{showImage && (
				<UserInfoShowImage
					imageUrl={showImage}
					setShowImage={setShowImage}
				/>
			)}
		</div>
	);
};

export default UserInfo;
