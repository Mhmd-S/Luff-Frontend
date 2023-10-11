import React from 'react'

const SettingsMenu = ({ handleClick }) => {
  return (
    <ul className="w-full h-full flex flex-col items-center text-xl divide-y-2 [&>*]:w-full [&>*]:p-4">
        <li onClick={()=>handleClick('ChangePassword')}>Change Password</li>
        <li>Change Profile Picture</li>
        <li>Change Bio</li>
        <li>Change Gender</li>
        <li>Help & Support</li>
    </ul>
  )
}

export default SettingsMenu