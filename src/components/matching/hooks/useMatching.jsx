import React, { useState, useEffect } from 'react';
import Card from '../../common/Card';
import { userAPI } from '../../../api/userAPI';
import Matched from '../../common/Matched';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';

const useMatching = () => {
	// Fetch users
	const [users, setUsers] = useState([]);
	const [matched, setMatched] = useState(null);
	const [loading, setLoading] = useState(true);
	const [err, setErr] = useState(null);

	const fetchUsers = async () => {
		setLoading(true);
		try {
			const response = await userAPI.getUsers();
			setUsers(response.data.data);
		} catch (err) {
			setErr('Ops! Something went wrong. Please try again later.');
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchUsers(); // Call the fetchUsers function to initiate the data fetching
	}, []);

	const handleLike = async (id) => {
		setLoading(true);
		const result = await userAPI.likeUser(id);
		console.log(result);
		if (result.data?.data) {
			setMatched(result.data.data);
		}
		setUsers((prev) => prev.filter((user) => user._id !== id));

		if (users.length < 5) {
			fetchUsers();
		}

		setLoading(false);
	};

	const handleReject = async (id) => {
		setLoading(true);
		await userAPI.rejectUser(id);
		setUsers((prev) => prev.filter((user) => user._id !== id));
		if (users.length < 5) {
			fetchUsers();
		}
		setLoading(false);
	};

	const closeMatched = () => {
		setMatched(null);
	};

	const renderUser = () => {
		if (err) {
			return <h1>{err}</h1>;
		}

		if (matched) {
			return <Matched userInfo={matched} handleClick={closeMatched} />;
		}

		const user = users[0];

		if (!user?._id) {
			return (
				<div className="relative w-full h-full flex flex-col items-center justify-center bg-white md:w-1/3 md:rounded-lg md:border-2">
					<FontAwesomeIcon
						icon={faSkullCrossbones}
						className="text-8xl text-purple-300"
					/>
					<h3 className="text-3xl text-purple-300 text-center mt-4 px-3">
						No more users to show!
					</h3>
                </div>
			);
		}

		return (
			<Card
				userInfo={user}
				key={user._id}
				handleLike={() => handleLike(user._id)}
				handleReject={() => handleReject(user._id)}
			/>
		);
	};

	return {
		renderUser,
	};
};

export default useMatching;
