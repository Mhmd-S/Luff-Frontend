import React from 'react'
import useChatIcon from './hooks/useChatIcon'

// The icon for the chat in the navbar
const ChatIcon = () => {

    const { notifications } = useChatIcon();

    return (
      <li>
            <ChatIcon/>
            <span>
                {notifications.length}  
            </span>
      </li>
    )
}

export default ChatIcon