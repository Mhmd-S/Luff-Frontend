import React, { useState, useEffect } from 'react'
import ChangeProfilePictures from '../ChangeProfilePictures';
import ChangeBio from '../ChangeBio';
import ChangeGender from '../ChangeGender';
import ChangeOrientation from '../ChangeOrientation';
import { useAuth } from '../../../contexts/useAuthContext';
import { useNavigate } from 'react-router-dom';

const useSettings = () => {

    const navigate = useNavigate();

    const [settingsPage, setSettingsPage] = useState('');

    const { user, logout } = useAuth();

    useEffect(()=>{
        if (!user) {
            navigate('login');
        }
    },[])

    const handleClick = (settingsName) => { 
        setSettingsPage(settingsName);
    }

    const goToMenu = () => {
        setSettingsPage('');
    }

    const displaySettingsPage = () => {
        switch (settingsPage) {
            case 'ChangeProfilePictures':
                return <ChangeProfilePictures handleGoBack={()=>handleClick('')} />;
            default:
                return null;
        }
    }

    return {
        settingsPage,
        handleClick,
        displaySettingsPage,
        goToMenu,
        logout,
    }
}

export default useSettings