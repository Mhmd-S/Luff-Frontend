import React from 'react'
import useChatIcon from './hooks/useChatIcon'
import MessageIcon from '../icons/MessageIcon';

// The icon for the chat in the navbar
const ChatIcon = () => {

    const { notificationNumb } = useChatIcon();

    return (
      <div className='relative'>
        <MessageIcon />
        <span className='absolute rounded-full text-white bg-sky-500 py-1 px-2 text-[0.7rem] top-4 left-4'>
            {notificationNumb}  
        </span>
      </div>
    )
}

export default ChatIcon