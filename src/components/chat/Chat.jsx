import React from 'react'
import useChat from './hooks/useChat'
import Contacts from './Contacts';
import ActiveChat from './ActiveChat';

const Chat = () => {

  const  {
    recipient,
    setRecipient,
    chatId,
    setChatId
  } = useChat();

  return (
    <div className='w-full h-full flex justify-center items-center'>
        {chatId && recipient 
        ?
          <ActiveChat setRecipient={setRecipient} setChatId={setChatId} chatId={chatId} recipient={recipient} />
        :
          <Contacts setRecipient={setRecipient} setChatId={setChatId} recipient={recipient} />
        }
    </div>
  )
}

export default Chat