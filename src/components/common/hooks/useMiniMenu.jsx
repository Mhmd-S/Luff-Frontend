import React, {useRef, useEffect} from 'react'

const useMiniMenu = (setShowMiniMenu) => {
    const miniMenuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (miniMenuRef.current && !miniMenuRef.current.contains(event.target)) {
                setShowMiniMenu(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [setShowMiniMenu]);

  return {
    miniMenuRef
  }
}

export default useMiniMenu