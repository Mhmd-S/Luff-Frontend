import  { useEffect, useState, useRef } from 'react';
import chatAPI from '../../../api/chatAPI';
import { useAuth } from '../../../contexts/useAuthContext';
import { socket} from '../../../socket-io/socket';
import Contact from '../Contact';
import LoadingIcon from '../../icons/LoadingIcon';

const useContacts = ( setChatId, setRecipient ) => {
    const [chats, setChats] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [stopFetching, setStopFetching] = useState(false);
    const [error, setError ] = useState(null);

    const { user } = useAuth();

    const containerRef = useRef(null);

    // Handle the response from the fetch request
    const handleFetchResponse = (res) => {

        if (res == null) {
            return;
        }

        if (res.status !== 200) {
          setError(
            'A problem was encountered. Try again later'
          );
          return;
        }

        setError(null);
    
        if (res.data.data.length === 0) {
          setStopFetching(true);
        } else {
          setPage(page + 1);
          setChats([...chats, ...res.data.data]);
        }
    };

    // Fetch chats
    const fetchChats = async () => {
    
      const res = await chatAPI.getChats(page);

      setLoading(true);
      handleFetchResponse(res);
      setLoading(false);
    };

    // Handle socket messages
    const handleSocketMessage = (data) => {
      const { chatId, sender, Recipient, message, timestamp } = data;
    
      setChats((prevChats) => {
        const chatIndex = prevChats.findIndex((chat) => chat._id === chatId);
    
        const updatedChat = {
          _id: chatId,
          participants: [sender, Recipient],
          lastMessage: {
            content: message,
            updatedAt: timestamp,
          },
        };
    
        if (chatIndex !== -1) {
          prevChats.splice(chatIndex, 1);
        }
    
        prevChats.unshift(updatedChat);
    
        return [...prevChats];
      });
    };

    // Initail fetch and setting up
    useEffect(()=>{
        // Fetch chats on mount
        fetchChats();

        // Listen for new messages
        socket.on('sent-message', handleSocketMessage);
        socket.on('receive-message', handleSocketMessage);
      
        // Cleanup
        return () => {
          socket.off('sent-message', handleSocketMessage);
          socket.off('receive-message', handleSocketMessage);
        };
        
    },[])

    // Setting up the intersection observer
    useEffect(() => {
      const container = containerRef.current;
    
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      };
    
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !stopFetching) {
            fetchChats();
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
    }, [chats, stopFetching]);
      
    // Populate chats
    const populateChats = () => {

        if (error) {
            return(
                <div className='p-2 text-center h-full flex flex-col justify-center items-center'>
                    {error}
                </div>
            )
        }

        if (chats.length === 0) { 
            return (
                <div className='p-2 text-center h-full flex flex-col justify-center items-center'>No chats found</div>
            );
        }

        const chatsEle = chats.map((chat) => {
            const contactInfo = chat.participants[0]._id === user._id ? chat.participants[1] : chat.participants[0];
            return (
                <Contact key={chat._id} chat={chat} contactInfo={contactInfo} setRecipient={setRecipient} setChatId={setChatId} />    
            );
        });
    
        return (
            <div className='w-full h-full overflow-y-auto'>
                {chatsEle}

                {loading && 
                    <div className='p-2 text-center'>
                        <LoadingIcon />
                    </div>
                }
                
                <div ref={containerRef} className='border-[1px] border-transparent'></div>
            </div>
        );

    }

    return {
        chats,
        loading,
        error,
        containerRef,
        populateChats
    }
};

export default useContacts;