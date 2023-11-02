import  { useEffect, useState, useRef, useLayoutEffect } from 'react';
import chatAPI from '../../../api/chatAPI';
import { useAuth } from '../../../contexts/useAuthContext';
import { socket} from '../../../socket-io/socket';
import MessageUser from '../MessageUser';
import { generateUUID } from '../../../utils/uuid';
import MessageContact from '../MessageContact';


const useChatActive = (chatId, recipient) => {

  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [stopFetching, setStopFetching] = useState(false);
  const [error, setError] = useState(null);

  const containerRef = useRef(null);
  const bottomRef = useRef(null);

  const { user } = useAuth();

  useEffect( ()=> {
    fetchChat();
    setMessages([]);
    setPage(1);
    setStopFetching(false);
  }, [ chatId,recipient ])


  useEffect(()=>{
    socket.on('receive-message', (data) => {
        const { chatId, sender, recipient, message, timestamp } = data;

        const newMessage = {
          _id: generateUUID(),
          content: message,
          sender: {
            _id: sender._id,
          },
          createdAt: timestamp,
        }

        // Set the new message in the messages
        setMessages((prevMessages) => [...prevMessages, newMessage]);
    })

    return () => {
        socket.off('receive-message');
    }
}, [])

useEffect(() => {
        
  const container = containerRef.current;

  const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
  };

  const observer = new IntersectionObserver(
      ([entry]) => {
          if (entry.isIntersecting) {
              fetchChat()
          }
      },
      options
  );

  if (container) {
      observer.observe(container);
  }

  return () => {
      observer.disconnect();
  };
}, [stopFetching, page]);

  useLayoutEffect(() => {
    if (page - 1 === 1) {
      bottomRef.current?.scrollIntoView({ behavior: "instant" });
      return;
    }
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);


  const fetchChat = async() => {
    if (stopFetching || !recipient || !chatId) {
      return;
    }
    
    setLoading(true);

    const res = await chatAPI.getChat(chatId, page);


    if (res.status !== 200) {
      setError(<div className='p-2 text-center h-full flex flex-col justify-center items-center'>A problem was encounterd. Try again later</div>);
      setLoading(false);
      return;
    }

    setError(null);

     
    if (res.data.data.messages.length === 0)  {
      setLoading(false);
      setStopFetching(true);
      return;
    }

    if (res.data.data.messages.length < 50) {
      setLoading(false);
      setStopFetching(true);
    }

    console.log(res.data.data.lastMessage) // somehing wrong. lastmessage is an array????
    if (page == 1 && !res.data.data.lastMessage?.seenBy.includes(user._id)) {
      await chatAPI.updateChatToSeen(chatId);
    }


    setMessages([ ...messages, ...res.data.data.messages.reverse() ]);
    setPage(page + 1);
    setLoading(false); 
  
  }

  const sendMessage = () => {
    // Send the message to the server
    socket.emit('send-message', {
      recipient: recipient, 
      message: messageInput,
      chatId: chatId,
    });

    // Add the sent message to the local state
    setMessages((prevMessages) => [
      ...prevMessages,
      { senderId: user._id, content: messageInput, createdAt: new Date(), chatId: chatId, _id: generateUUID() },
    ]); 

    // Clear the message input
    setMessageInput('');
  }

  const enterPressed = (e) => {
    if ( (e.key === 'Enter' || e.code === 13) && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  const populateMessages = () => {

    let messagesElements = []

    if (messages.length > 0) {
      messagesElements = messages.map((message) => {

        if (message.senderId === user._id) {
          return (
            <MessageUser key={message._id} message={message} />
          );
        } else {
          return (
            <MessageContact key={message._id} message={message} />
          );
        }
        })
    }
      
      messagesElements.push(<div key={generateUUID()} ref={bottomRef} />);

      return messagesElements;
  }

  return {
    populateMessages,
    sendMessage,
    setMessageInput,
    enterPressed,
    containerRef,
    bottomRef,
    loading,
    messageInput
  };
};

export default useChatActive;

