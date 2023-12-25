import React from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGear,
	faHome,
	faMessage,
	faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const useMobileNavBar = () => {
	const location = useLocation();

	const navItems = [
		{
			path: 'home',
			icon: faHome,
			text: 'Home',
		},
		{
			path: 'chat',
			icon: faMessage,
			text: 'Chat',
		},
		{
			path: 'settings',
			icon: faGear,
			text: 'Settings',
		},
		{
			path: 'profile',
			icon: faUser,
			text: 'Profile',
		},
	];

	const renderNavItems = () => {
		return navItems.map((item, index) => (
			<li
				key={index}
				className={
					location.pathname === item.path
						? `flex items-center bg-purple-600 text-sm rounded-3xl px-3 py-2 transition-all ease-in-out`
						: undefined
				}
			>
				<Link to={item.path}>
					<FontAwesomeIcon
						icon={item.icon}
						className={`text-2xl ${
							location.pathname === item.path
								? 'text-white'
								: 'text-purple-600'
						}`}
					/>
				</Link>
				{location.pathname === item.path ? (
					<span className="text-white font-bold ml-2">
						{item.text}
					</span>
				) : undefined}
			</li>
		));
	};

	return {
		renderNavItems,
	};
};

export default useMobileNavBar;
