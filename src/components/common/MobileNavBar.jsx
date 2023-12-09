import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faHome, faMessage, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import useMobileNavBar from './hooks/useMobileNavBar';

const MobileNavBar = () => {
	return (
		<ul className="w-full h-full sticky border-t-[1px] bottom-0 flex flex-row justify-evenly items-center md:hidden ">
			<li className="hidden md:flex md:items-center md:justify-center">
				<img src="./logo1.png" alt="logo" className="w-1/2" />
			</li>

			<li>
				<Link to="/home">
					<FontAwesomeIcon
						icon={faHome}
						className="text-2xl text-my-orange"
					/>
				</Link>
			</li>

			<li>
				<Link to="/chat">
					<FontAwesomeIcon
						icon={faMessage}
						className="text-2xl text-my-orange"
					/>
				</Link>
			</li>

			<li>
				<Link to="/settings">
					<FontAwesomeIcon
						icon={faGear}
						className="text-2xl text-my-orange"
					/>
				</Link>
			</li>

			<li>
				<Link to="/profile">
					<FontAwesomeIcon
						icon={faUser}
						className="text-2xl text-my-orange"
					/>
				</Link>
			</li>
		</ul>
	);
};

export default MobileNavBar;
