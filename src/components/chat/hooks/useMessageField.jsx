import React, { useState } from 'react'
import { socket } from '../../../socket-io/socket';
import { generateUUID } from '../../../utils/uuid';
import { useAuth } from '../../../contexts/useAuthContext';

const useMessageField = ({ recipient, chatId, setMessages }) => {

    const [messageInput, setMessageInput] = useState('');
    
    const { user } = useAuth();

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

    return {
        messageInput,
        sendMessage,
        setMessageInput,
        enterPressed
    }
}

export default useMessageField