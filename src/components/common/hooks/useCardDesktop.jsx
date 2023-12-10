import React, {useEffect} from 'react'

const useCardDesktop = (userInfo, handleLike, handleReject, dummyCard) => {

    useEffect(() => {
        window.addEventListener('keyup', handleKeyDown);
        return () => {
            window.removeEventListener('keyup', handleKeyDown);
        };
    }, [userInfo]);

    const handleKeyDown = (e) => {
        console.log
		if (e.isTrusted === false || dummyCard) return;
		if (e.code === 'ArrowLeft') {
			handleLike();
		} else if (e.code === 'ArrowRight') {
			handleReject();
		} 
	};

    return {
        handleKeyDown
    }

}

export default useCardDesktop