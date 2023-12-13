import React from 'react';
import useBlockUser from './hooks/useBlockUser';
import SmallModal from './SmallModal';


const BlockUser = ({ showBlockUser, setShowBlockUser, blockUserId }) => {

    const { handleBlockUser, loading } = useBlockUser(blockUserId);

	return (
		<SmallModal showModal={showBlockUser} setShowModal={setShowBlockUser}>
			<h3 className="text-center text-2xl font-semibold text-[#023c64]">
				Block User
			</h3>
			<p className="text-center text-lg font-semibold text-[#023c64]">
				Are you sure you want to block this user?
			</p>
			<div className="flex justify-evenly items-center w-full">
				<button
					className="w-1/4 bg-[#023c64] text-white rounded-md p-2"
					onClick={handleBlockUser}
				>
					Yes
				</button>
				<button
					className="w-1/4 border-[#023c64] border-2 text-[#023c64] rounded-md p-2"
					onClick={() => setShowBlockUser(false)}
				>
					No
				</button>
			</div>
		</SmallModal>
	);
};

export default BlockUser;
