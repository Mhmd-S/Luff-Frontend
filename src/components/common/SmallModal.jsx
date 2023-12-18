import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const SmallModal = ({ showModal, setShowModal, children }) => {
	return (
		<div
			className={`absolute w-full h-full flex items-center justify-center bg-[rgba(0,0,0,0.13)] overflow-hidden z-30`}
		>
			<FontAwesomeIcon
				icon={faClose}
				className="absolute top-0 right-0 text-2xl text-white m-2 cursor-pointer"
				onClick={() => setShowModal(false)}
			/>
			<div
				className={`bg-white rounded-lg w-3/4 h-3/5 p-2 flex flex-col items-center justify-evenly transition-all duration-300 `}
			>
				{children}
			</div>
		</div>
	);
};

export default SmallModal;
