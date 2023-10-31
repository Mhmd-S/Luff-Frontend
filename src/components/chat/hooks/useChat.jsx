import  { useEffect, useState, useRef } from 'react';
import chatAPI from '../../../api/chatAPI'

const useChat = () => {

  const [ recipientId, setRecipientId ] = useState(null);
  const [ chatId, setChatId ] = useState(null);


  return {
    recipientId,
    setRecipientId,
    chatId,
    setChatId
  }

}

export default useChat