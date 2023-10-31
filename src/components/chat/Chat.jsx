import React from 'react'
import useChat from './hooks/useChat'
import Contacts from './Contacts';

const Chat = () => {

  const  {
    recipientId,
    setRecipientId,
    chatId,
    setChatId
  } = useChat();

  return (
    <div className='w-full h-full'>
        <Contacts setRecipientId={setRecipientId} setChatId={setChatId} recipientId={recipientId} />
    </div>
  )
}

export default Chat