import React, { useEffect, useState } from 'react';
import ReportUser from '../ReportUser';
import BlockUser from '../BlockUser';
import { useOutletContext } from 'react-router-dom';

// Fix the modal animation
// Clear the chat when blocking and also when blocking a card in the matching area

const useCardDesktop = (userInfo, handleLike, handleReject, dummyCard) => {
	const [showMiniMenu, setShowMiniMenu] = useState(false);
	const [showSmallModal, setShowSmallModal] = useState(0); // 0: none, 1: report, 2: bloc

	const { majorModalOpen } = useOutletContext();

	useEffect(() => {
		window.addEventListener('keyup', handleKeyDown);
		return () => {
			window.removeEventListener('keyup', handleKeyDown);
		};
	}, [userInfo, majorModalOpen, showSmallModal]);

	console.log('majorModalOpen', majorModalOpen);

	const handleKeyDown = (e) => {
		if (e.isTrusted === false || dummyCard || showSmallModal|| majorModalOpen) return;
		if (e.code === 'ArrowLeft') {
			handleLike();
		} else if (e.code === 'ArrowRight') {
			handleReject();
		}
	};

	const renderSmallModal = () => {
		if (showSmallModal === 1) {
			return (
				<ReportUser
					showReportUser={showSmallModal}
					setShowReportUser={setShowSmallModal}
					reportUserId={userInfo._id}
					reset={handleReject}
				/>
			);
		} else if (showSmallModal === 2) {
			return (
				<BlockUser
					showBlockUser={showSmallModal}
					setShowBlockUser={setShowSmallModal}
					reportUserId={userInfo._id}
					reset={handleReject}
				/>
			);
		} else {
			return undefined;
		}
	};

	return {
		showSmallModal,
		showMiniMenu,
		setShowMiniMenu,
		setShowSmallModal,
		renderSmallModal,
		majorModalOpen,
	};
};

export default useCardDesktop;
