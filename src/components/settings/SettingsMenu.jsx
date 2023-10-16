import React from 'react'
import { Link } from 'react-router-dom'

const SettingsMenu = ({ handleClick }) => {
  return (
    <ul className="w-full flex flex-col items-center text-xl divide-y-[1px] [&>*]:w-full [&>*]:p-4">
        <Link to="/request-reset-password" target="_blank" rel="noopener noreferrer">Change Password</Link>
        <li onClick={()=>handleClick('ChangeProfilePicture')}>Change Profile Picture</li>
        <li>Change Bio</li>
        <li>Change Gender</li>
        <li>Help & Support</li>
    </ul>
  )
}

export default SettingsMenu