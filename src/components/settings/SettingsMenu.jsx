import React from 'react'
import { Link } from 'react-router-dom'

const SettingsMenu = ({ settingsPage, handleClick }) => {
  return (
    <div className={`w-full h-full ${settingsPage && 'hidden md:block'}`}>
      <div className="w-full p-5 flex flex-col border-b-2 bg-[#fafafa]">

            <h1 className="text-4xl text-center font-semibold">
              Settings
            </h1>

            <h3 className="text-xl py-6 text-center text-sky-500 underline">
              View an edit information related to your account.
            </h3>

          </div>

      <ul className="w-full flex flex-col items-center text-xl divide-y-[1px] [&>*]:w-full [&>*]:p-4">
          <Link to="/request-reset-password" target="_blank" rel="noopener noreferrer">Change Password</Link>
          <li onClick={()=>handleClick('ChangeProfilePicture')}>Change Profile Picture</li>
          <li onClick={()=>handleClick('ChangeBio')}>Change Bio</li>
          <li onClick={()=>handleClick('ChangeGender')}>Change Gender</li>
          <li onClick={()=>handleClick('ChangeOrientation')}>Change Orientation</li>
      </ul>
    </div>
  )
}

export default SettingsMenu