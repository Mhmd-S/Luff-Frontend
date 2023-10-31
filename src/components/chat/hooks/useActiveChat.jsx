import  { useEffect, useState, useRef, useLayoutEffect } from 'react';
import chatAPI from '../../../api/chatAPI';
import { useAuth } from '../../../contexts/useAuthContext';
import { socket} from '../../../socket-io/socket';

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

  useLayoutEffect(() => {
    if (page - 1 === 1) {
      bottomRef.current?.scrollIntoView({ behavior: "instant" });
      return;
    }
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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

  const convertDate = (date) => {
    const dateObj = new Date(date);
    const now = new Date(); // Get the current date and time

    let dateStr;
    let timeStr = dateObj.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
  });

    // Check if the date is today, then display the time
    if (
        dateObj.getDate() === now.getDate() &&
        dateObj.getMonth() === now.getMonth() &&
        dateObj.getFullYear() === now.getFullYear()
    ) {
        dateStr = '';
    } else if (Math.abs(now - dateObj) < 7 * 24 * 60 * 60 * 1000) {
        // Check if the date is within the last 7 days (604800000 milliseconds)
        dateStr = dateObj.toLocaleDateString('en-US', { weekday: 'short' });
    } else {
        dateStr = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
    return `${dateStr} ${timeStr}`.trim();
  };

  function generateUUID() {
    const pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    return pattern.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  const populateMessages = () => {
    const messagesEle = (messages.length > 0 ) && 
      messages.map((message) => {
      if (message.senderId === user._id) {
        return (
          <div key={message._id} className='bg-[#99acc6] max-w-[90%] my-1 px-4 py-1 self-end rounded-3xl'>
            <div className='max-w-full break-words'>{message.content}</div>
            <div className='text-[0.7rem]'>{convertDate(message.createdAt)}</div>
          </div>
        );
      } else {
        return (
          <div key={message._id} className='bg-[#787ad9] flex flex-col max-w-[90%]  my-1 px-4 py-1 self-start rounded-3xl'>
            <div className='max-w-full break-words'>{message.content}</div>
            <div>{convertDate(message.createdAt)}</div>
          </div>
        );
      }
      })
      return messagesEle
  }

  return {
    populateMessages,
    sendMessage,
    containerRef,
    loading,
    setMessageInput,
    messageInput
  };
};

export default useChatActive;

