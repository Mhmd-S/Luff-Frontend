import React from 'react';
import useProfile from './hooks/useProfile';
import Card from '../common/Card';
import { Link } from 'react-router-dom';

const Profile = () => {
	const { user } = useProfile();

	return (
		<div className="w-full h-full flex p-2 justify-center">
			<Card userInfo={user} dummyCard={true} />
		</div>
	);
};

export default Profile;
