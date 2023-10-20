import React, { useState } from 'react'
import ChangeProfilePictures from '../ChangeProfilePictures';
import ChangeBio from '../ChangeBio';
import ChangeGender from '../ChangeGender';
import ChangeOrientation from '../ChangeOrientation';

const useSettings = () => {

    const [settingsPage, setSettingsPage] = useState('');

    const handleClick = (settingsName) => { 
        setSettingsPage(settingsName);
    }

    const goToMenu = () => {
        setSettingsPage('');
    }

    const displaySettingsPage = () => {
        switch (settingsPage) {
            case 'ChangeProfilePicture':
                return <ChangeProfilePictures handleGoBack={()=>handleClick('')} />;
            case 'ChangeBio':
                return <ChangeBio handleGoBack={()=>handleClick('')} />;
            case 'ChangeGender':
                return <ChangeGender handleGoBack={()=>handleClick('')} />;
            case 'ChangeOrientation':
                return <ChangeOrientation handleGoBack={()=>handleClick('')} />;
            default:
                return null;
        }
    }

    return {
        settingsPage,
        handleClick,
        displaySettingsPage,
        goToMenu
    }
}

export default useSettings