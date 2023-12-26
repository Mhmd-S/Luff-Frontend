import React from 'react';
import SmallModal from './Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Guidelines = ({ showGuidelines, setShowGuidelines }) => {
	return (
		<SmallModal showModal={showGuidelines} setShowModal={setShowGuidelines}>
			<div className="w-full h-full flex flex-col justify-evenly items-center text-center">
				<h1 className="text-xl font-semibold mb-4">
					Community Guidelines
				</h1>
				<p className="text-md text-gray-600">
					These are the guidelines that all users must follow. Failure
					to do so will result in a ban.
				</p>
				<ul className='text-md text-gray-600'>
					<li>
						1. No NSFW content
					</li>
					<li className="text-md text-gray-600">
						2. No illegal content
					</li>
					<li className="text-md text-gray-600">3. No harassment</li>
					<li className="text-md text-gray-600">
						4. No impersonation
					</li>
				</ul>
				<p>
					Hope you enjoy your stay! 
					<FontAwesomeIcon
						icon={faHeart}
						className="text-red-500 mx-1"
					/>
				</p>
			</div>
		</SmallModal>
	);
};

export default Guidelines;
