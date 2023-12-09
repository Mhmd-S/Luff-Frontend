import React, { useState } from 'react';
import { useAuth } from '../../../contexts/useAuthContext';
import { useNavigate } from 'react-router-dom';

const useDesktopUtilityBar = () => {
	const [showProfile, setShowProfile] = useState(false);
	const { user, logout } = useAuth();

    const navigate = useNavigate();

    const handleClickShowProfile = () => {
        if (showProfile) {
            navigate('/home');
        } else {
            navigate('/profile');
        }
        setShowProfile(!showProfile);
    }

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    }

	return {
		showProfile,
		user,
	    handleLogout,
		handleClickShowProfile,
	};
};

export default useDesktopUtilityBar;
