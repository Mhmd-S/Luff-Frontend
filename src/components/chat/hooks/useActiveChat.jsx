import  { useEffect, useState, useRef, useLayoutEffect } from 'react';
import chatAPI from '../../../api/chatAPI';
import { useAuth } from '../../../contexts/useAuthContext';
import { socket} from '../../../socket-io/socket';
import MessageUser from '../MessageUser';
import { generateUUID } from '../../../utils/uuid';
import MessageContact from '../MessageContact';
import { useNotification } from '../../../contexts/useNotificationContext';


const useChatActive = (chatId, recipient) => {

    const [messages, setMessages] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
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
    
      // Setup sockets
      socket.on('receive-message', handleRecieveMessage)    

      const container = containerRef.current;

      const options = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1,
      };

      const observer = new IntersectionObserver(
          async([entry]) => {
            console.log(page)
              if (entry.isIntersecting) {
                if (stopFetching) {
                    return;
                }
                  await fetchChat()
              }
          },
          options
      );

      if (container) {
          observer.observe(container);
      }

      return () => {
        observer.disconnect(),
        socket.off('receive-message', handleRecieveMessage)    
      }

    }, [chatId, recipient, page, stopFetching])

    useLayoutEffect(() => {
        
        if (page - 1 === 1) {
            bottomRef.current?.scrollIntoView({ behavior: "instant" });
            return;
        }

        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
        
    }, [messages, page]);     
    

    const handleRecieveMessage = (data) => {

        handleReadMessage(data._id);
        
        // Set the new message in the messages
        setMessages((prevMessages) => [ ...prevMessages, data]);
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

        if (error) {
            setError(null);
        }
                
        // If there are no messages, stop future fetching
        if (res.data.data.messages.length === 0)  {
          setLoading(false);
          setStopFetching(true);
          return;
        }   
        
        // If the number of messages is less than 20, stop future fetching
        if (res.data.data.messages.length < 30) {
          setLoading(false);
          setStopFetching(true);
        }   

        // Update message to seen if the last message is not seen by the user
        for (const mesg in res.data.data.messages) {
            if (!res.data.data.messages[mesg].seenBy.includes(user._id)) {
                handleReadMessage(res.data.data.messages[mesg]._id);
            }
        }       

        setPage((prevPage) => prevPage + 1);
        setMessages((prevMessages) => [...res.data.data.messages, ...prevMessages]);
        setLoading(false); 
    }

    // Factory function to populate the messages
    const populateMessages = () => {
        console.log('Message Pop')
        let messagesElements = []
        let messagesReversed = [...messages];

        if (messages.length > 0) {
          messagesElements = messagesReversed.map((message) => {

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
    setMessages,
    containerRef,
    bottomRef,
    loading,
  };

};

export default useChatActive;

