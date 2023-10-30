import  { useEffect, useState, useRef } from 'react';
import chatAPI from '../../../api/chatAPI'

const useChat = () => {

  const [ chats, setChats ] = useState([]);
  const [ activeChat, setActiveChat ] = useState(null);
  const [stopFetchingChats, setStopFetchingChats] = useState(false);

  const containerRef = useRef(null);

  

  const setActive = (chat) => {
    setActiveChat(chat);
  }

  const removeActive = () => {
    setActiveChat(null);
  }

  const addChat = (chat) => {
    setChats((prev) => [...prev, chat]);
  }

  const removeChat = (chatId) => {
    setChats((prev) => prev.filter((chat) => chat._id !== chatId));
  }

  const updateChat = (chat) => {
    setChats((prev) => prev.map((item) => item._id === chat._id ? chat : item));
  }

  return {
    chats,
    activeChat,
    containerRef,
    setActive,
    removeActive,
    addChat,
    removeChat,
    updateChat,
  }

}

export default useChat