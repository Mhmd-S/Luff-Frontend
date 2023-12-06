import React from 'react';
import useProfile from './hooks/useProfile';
import Card from '../common/Card';
import { Link } from 'react-router-dom';
import CardDesktop from '../common/CardDesktop';

const Profile = () => {
	const { user } = useProfile();

	return (
		<div className="w-full h-full flex justify-center items-center">
			<div className='w-full h-full flex items-center justify-center md:h-[80%]'>
				<CardDesktop userInfo={user} dummyCard={true} />
				<Card userInfo={user} dummyCard={true} />
			</div>
		</div>
	);
};

export default Profile;
