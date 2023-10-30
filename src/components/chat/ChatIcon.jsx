import React from 'react'
import useChatIcon from './hooks/useChatIcon'
import MessageIcon from '../icons/MessageIcon';

// The icon for the chat in the navbar
const ChatIcon = () => {

    const { notificationNumb } = useChatIcon();

    return (
      <div>
        <MessageIcon />
        <span>
            {notificationNumb}  
        </span>
      </div>
    )
}

export default ChatIcon