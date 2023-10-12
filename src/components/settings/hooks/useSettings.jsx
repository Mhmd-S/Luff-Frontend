import React, { useState } from 'react'
import ChangePassword from '../ChangePassword'

const useSettings = () => {

    const [settingsPage, setSettingsPage] = useState('');

    const handleClick = (settingsName) => { 
        setSettingsPage(settingsName);
    }

    const goToMenu = () => {
        setSettingsPage('');
    }

    const displaySettingsPage = () => {
        if (settingsPage == 'ChangePassword') {
            return <ChangePassword goToMenu={goToMenu} />
        }
        // } else if (settingsPage == 'ChangeProfilePicture') {
        //     return <ChangeProfilePicture />
        // } else if (settingsPage == 'ChangeBio') {
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