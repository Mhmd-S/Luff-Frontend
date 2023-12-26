import React, { useEffect, useState } from 'react';
import ReportUser from '../ReportUser';
import BlockUser from '../BlockUser';
import { useOutletContext } from 'react-router-dom';

const useCardDesktop = (userInfo, handleLike, handleReject, dummyCard) => {
	const [showMiniMenu, setShowMiniMenu] = useState(false);
	const [showSmallModal, setShowSmallModal] = useState(0); // 0: none, 1: report, 2: block

	const { majorModalOpen } = useOutletContext();

	useEffect(() => {
		const handleKeyDown = debounce((e) => {
			if (
				showSmallModal ||
				majorModalOpen ||
				e.isTrusted === false ||
				dummyCard
			) {
				return;
			}

			if (e.code === 'ArrowLeft') {
				handleLike();
			} else if (e.code === 'ArrowRight') {
				handleReject();
			}
		}, 400);

		window.addEventListener('keyup', handleKeyDown);
		return () => {
			window.removeEventListener('keyup', handleKeyDown);
		};
	}, [userInfo, majorModalOpen, showSmallModal]);

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
	};
};

export default useCardDesktop;

const debounce = (func, delay) => {
	let timeoutId;
	return (...args) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			func.apply(null, args);
		}, delay);
	};
};
