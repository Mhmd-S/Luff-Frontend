import  { useState } from 'react';
import chatAPI from '../../../api/chatAPI'

const useChat = () => {

  const [ recipient, setRecipient ] = useState(null);
  const [ chatId, setChatId ] = useState(null);


  return {
    recipient,
    setRecipient,
    chatId,
    setChatId
  }

}

export default useChat