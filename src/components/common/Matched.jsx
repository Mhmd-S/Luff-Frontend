import React from 'react'

const Matched = ({ userInfo, handleClick }) => {
  return (
    <div className='absolute w-1/3 h-1/3 rounded-lg bg-white'>
        <div>
            <img src={userInfo.profilePictures[0]} alt="profile picture" />
        </div>
        <h1>
            You have been matched with {userInfo.name}!
        </h1>
        <h2>
            You can now message them in the messages tab.
        </h2>
        <button onClick={handleClick}>
            Ok
        </button>
    </div>
  )
}

export default Matched