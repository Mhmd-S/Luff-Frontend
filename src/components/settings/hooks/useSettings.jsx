import React, { useState } from 'react'
import ProfilePictureSettings from '../ProfilePictureSettings';

const useSettings = () => {

    const [settingsPage, setSettingsPage] = useState('');

    const handleClick = (settingsName) => { 
        setSettingsPage(settingsName);
    }

    const goToMenu = () => {
        setSettingsPage('');
    }

    const displaySettingsPage = () => {
        if (settingsPage == 'ChangeProfilePicture') {
            return <ProfilePictureSettings />
        } 
        // else if (settingsPage == 'ChangeBio') {
        //     return <ChangeBio />
        // } else if (settingsPage == 'ChangeGender') {
        //     return <ChangeGender />
        // } else if (settingsPage == 'HelpAndSupport') {
        //     return <HelpAndSupport />
        // } else {
        //     return <SettingsMenu handleClick={handleClick} />
        // }
    }

    return {
        settingsPage,
        handleClick,
        displaySettingsPage,
        goToMenu
    }
}

export default useSettings