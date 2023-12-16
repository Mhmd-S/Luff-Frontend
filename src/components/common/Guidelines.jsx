import React from 'react';
import SmallModal from './SmallModal';

const Guidelines = ({ showGuidelines, setShowGuidelines }) => {
	return (
		<SmallModal showModal={showGuidelines} setShowModal={setShowGuidelines}>
			<div className="w-full h-full flex flex-col justify-center items-center">
				<h1 className="text-2xl font-semibold mb-4">
					Community Guidelines
				</h1>
				<p className="text-lg text-gray-600">
					These are the guidelines that all users must follow. Failure
					to do so will result in a ban.
				</p>
				<p className="text-lg text-gray-600">1. No spamming</p>
				<p className="text-lg text-gray-600">3. No NSFW content</p>
				<p className="text-lg text-gray-600">4. No illegal content</p>
				<p className="text-lg text-gray-600">5. No harassment</p>
				<p className="text-lg text-gray-600">6. No impersonation</p>
				<p>
					Remember we have your TP number and we will hunt you if you
					break these rules.
				</p>
			</div>
		</SmallModal>
	);
};

export default Guidelines;
