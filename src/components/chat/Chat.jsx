import React from 'react'
import useChat from './hooks/useChat'
import Contacts from './Contacts';

const Chat = () => {

  const  {
    chats,
    activeChat,
    containerRef,
    setActive,
    removeActive,
    addChat,
    removeChat,
    updateChat,
  } = useChat();

  return (
    <div className='w-full h-full'>
        <Contacts chats={chats} containerRef={containerRef} />
    </div>
  )
}

export default Chat