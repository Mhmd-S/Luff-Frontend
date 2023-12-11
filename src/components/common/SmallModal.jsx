import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const SmallModal = ({ setShowModal, handleConfirmation, title, subTitle }) => {

	return (
		<div className="absolute w-full h-full flex items-center justify-center bg-[rgba(0,0,0,0.13)] z-20">
			<FontAwesomeIcon
				icon={faClose}
				className="absolute top-0 right-0 text-2xl text-white m-2 cursor-pointer"
				onClick={() => setShowModal(false)}
			/>
			<div className="bg-white rounded-lg w-3/4 h-1/2 p-2 flex flex-col items-center justify-evenly">
				<h3 className="text-center text-2xl font-semibold text-[#023c64]">
					{title}
				</h3>
				<p className="text-center text-lg font-semibold text-[#023c64]">
					{subTitle}
				</p>
				<div className="flex justify-evenly items-center w-full">
					<button className="w-1/4 bg-[#023c64] text-white rounded-md p-2" onClick={handleConfirmation}>
						Yes
					</button>
					<button className="w-1/4 border-[#023c64] border-2 text-[#023c64] rounded-md p-2" onClick={()=>setShowModal(false)}>
						No
					</button>
				</div>
			</div>
		</div>
	);
};

export default SmallModal;