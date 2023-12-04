import React from 'react';
import useProfile from './hooks/useProfile';
import Card from '../common/Card';
import { Link } from 'react-router-dom';

const Profile = () => {
	const { user } = useProfile();

	return (
		<div className="w-full h-full flex p-2 justify-center">
			<Card userInfo={user} dummyCard={true} />

			<div className="hidden md:block mt-2 text-slate-900 w-1/4 h-fit ml-2 p-3 border-l-[2px] border-my-orange">
				<h2 className="text-bold text-xl underline">Your Card</h2>
				<h3 className="text-semi-bold text-lg">
					This is how your card will look like! To edit your info
				</h3>
			</div>
		</div>
	);
};

export default Profile;
