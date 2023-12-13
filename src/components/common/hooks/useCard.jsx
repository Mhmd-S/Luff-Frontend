import React, { useState } from 'react';
import ReportUser from '../ReportUser';
import BlockUser from '../BlockUser';

const useCard = (userInfo) => {
	const [showSmallModal, setShowSmallModal] = useState(0); // 0: none, 1: report, 2: bloc
	const renderSmallModal = () => {
		if (showSmallModal === 1) {
			return (
				<ReportUser
					setShowReportUser={setShowSmallModal}
					reportUserId={userInfo._id}
				/>
			);
		} else if (showSmallModal === 2) {
			return (
				<BlockUser
					setShowBlockUser={setShowSmallModal}
					reportUserId={userInfo._id}
				/>
			);
		} else {
			return undefined;
		}
	};

	return {
		showSmallModal,
		setShowSmallModal,
		renderSmallModal,
	};
};

export default useCard;
