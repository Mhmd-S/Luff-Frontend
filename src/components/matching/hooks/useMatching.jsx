import { useState, useEffect } from 'react';
import Card from '../../common/Card';
import CardDekstop from '../../common/CardDesktop';
import { userAPI } from '../../../api/userAPI';
import Matched from '../../common/Matched';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';;

const useMatching = () => {
	const [users, setUsers] = useState([]);
	const [matched, setMatched] = useState(false);
	const [loading, setLoading] = useState(true);
	const [viewPortWidth, setViewPortWidth] = useState(window.innerWidth);
	const [err, setErr] = useState(null);
	const [animateLike, setAnimateLike] = useState(false);
	const [animateReject, setAnimateReject] = useState(false);

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
		const handleResize = () => {
			setViewPortWidth(window.innerWidth);
		};

		// Add event listener for window resize
		window.addEventListener('resize', handleResize);

		// Remove event listener on component unmount
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const timeout = (ms) =>
		new Promise((resolve) => {
			setTimeout(resolve, ms);
		});

	const animateLikeHandler = async () => {
		setAnimateLike(true);
		await timeout(500);
		setAnimateLike(false);
	};

	const handleLike = async () => {
		if (animateLike || animateReject || matched || loading) {
			return;
		}

		await animateLikeHandler();

		setLoading(true);

		try {
			const result = await userAPI.likeUser(users[0]._id);

			if (result.data?.data) {
				setMatched(result.data.data);
			}

			setUsers((prev) =>
				prev.filter((user) => user._id !== users[0]._id)
			);

			if (users.length < 5) {
				await fetchUsers();
			}
		} catch (error) {
			// Handle error
			console.error('Error liking user:', error);
		} finally {
			setLoading(false);
		}
	};

	const animateRejectHandler = async () => {
		setAnimateReject(true);
		await timeout(500);
		setAnimateReject(false);
	};

	const handleReject = async () => {
		if (animateLike || animateReject || matched || loading) {
			return;
		}

		await animateRejectHandler();

		setLoading(true);

		try {
			await userAPI.rejectUser(users[0]._id);
			setUsers((prev) =>
				prev.filter((user) => user._id !== users[0]._id)
			);

			if (users.length < 5) {
				await fetchUsers();
			}
		} catch (error) {
			// Handle error
			console.error('Error rejecting user:', error);
		} finally {
			setLoading(false);
		}
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
				<div className="relative w-full h-full flex flex-col items-center justify-center bg-white md:w-2/5 md:rounded-lg md:border-2">
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

		return viewPortWidth > 768 ? (
			<CardDekstop
				userInfo={user}
				key={user._id}
				handleLike={handleLike}
				handleReject={handleReject}
			/>
		) : (
			<Card
				userInfo={user}
				key={user._id}
				handleLike={handleLike}
				handleReject={handleReject}
			/>
		);
	};

	return {
		matched,
		renderUser,
		animateLike,
		animateReject,
		loading,
	};
};

export default useMatching;
