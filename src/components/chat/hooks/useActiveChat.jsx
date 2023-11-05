import  { useEffect, useState, useRef, useLayoutEffect } from 'react';
import chatAPI from '../../../api/chatAPI';
import { useAuth } from '../../../contexts/useAuthContext';
import { socket} from '../../../socket-io/socket';
import MessageUser from '../MessageUser';
import { generateUUID } from '../../../utils/uuid';
import MessageContact from '../MessageContact';
import { useNotification } from '../../../contexts/useNotificationContext';


const useChatActive = (chatId, recipient) => {

    const [chat, setChat] = useState(null);
    const [messageInput, setMessageInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [stopFetching, setStopFetching] = useState(false);
    const [error, setError] = useState(null);   

    // Refs
    const containerRef = useRef(null);
    const bottomRef = useRef(null);

    // Contexts
    const { user } = useAuth();
    const { removeNotification } = useNotification();

    // Reset the messages when the chatId changes
    useEffect( ()=> {
      fetchChat();
      setMessages([]);
      setPage(1);
      setStopFetching(false);
    }, [ chatId,recipient ])


    useEffect(()=>{
        socket.on('receive-message', handleRecieveMessage)    


        return () => {
            socket.off('receive-message', handleRecieveMessage)    
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
    

    const handleRecieveMessage = (data) => {

        handleReadMessage(data._id);
        
        // Set the new message in the messages
        setMessages((prevMessages) => [...prevMessages, data]);
    }

    const handleReadMessage = (messageId) => {

        socket.emit('read-message', {
            messageId: messageId,
        });

    }

    const fetchChat = async() => {
        if (stopFetching || !recipient || !chatId) {
          return;
        }       

        setLoading(true);   
        
        const res = await chatAPI.getChat(chatId, page);    

        // If there is an error
        if (res.status !== 200) {
          setError(<div className='p-2 text-center h-full flex flex-col justify-center items-center'>A problem was encounterd. Try again later</div>);
          setLoading(false);
          return;
        }   

        setError(null); 
        
        // If there are no messages, stop future fetching
        if (res.data.data.messages.length === 0)  {
          setLoading(false);
          setStopFetching(true);
          return;
        }   
        
        // If the number of messages is less than 25, stop future fetching
        if (res.data.data.messages.length < 25) {
          setLoading(false);
          setStopFetching(true);
        }   

        // Update chat to seen if the last message is not seen by the user
        if (!res.data.data?.lastMessage?.seenBy.includes(user._id) ) {
            removeNotification();
        }
        
        setMessages([ ...messages, ...res.data.data.messages.reverse() ]);
        setPage(page + 1);
        setLoading(false); 
    }

    const sendMessage = () => {
        if (!messageInput) {
          return;
        }

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

