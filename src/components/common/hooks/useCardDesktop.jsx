import React, {useEffect, useState} from 'react'
import ReportUser from '../ReportUser'
import BlockUser from '../BlockUser'


// Fix the modal animation
// Clear the chat when blocking and also when blocking a card in the matching area


const useCardDesktop = (userInfo, handleLike, handleReject, dummyCard) => {

    const [showMiniMenu, setShowMiniMenu] = useState(false);
    const [showSmallModal, setShowSmallModal] = useState(0); // 0: none, 1: report, 2: bloc

    useEffect(() => {
        window.addEventListener('keyup', handleKeyDown);
        return () => {
            window.removeEventListener('keyup', handleKeyDown);
        };
    }, [userInfo]);

    const handleKeyDown = (e) => {
		if (e.isTrusted === false || dummyCard) return;
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
				/>
			);
		} else if (showSmallModal === 2) {
			return (
				<BlockUser
					showBlockUser={showSmallModal}
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
        showMiniMenu,
        setShowMiniMenu,
        setShowSmallModal,
        renderSmallModal,
    }

}

export default useCardDesktop