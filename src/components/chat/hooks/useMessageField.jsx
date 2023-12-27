import React, { useState } from 'react'
import { socket } from '../../../socket-io/socket';
import { useNotification } from '../../../contexts/useNotificationContext';

const useMessageField = ({ recipient, chatId }) => {

    const [messageInput, setMessageInput] = useState('');

    const { setNotification } = useNotification();

    const sendMessage = () => {
        if (!messageInput) {
          return;
        }
        

        // Validate the message
        if (messageInput.trim() === '') {
            setNotification('Message cannot be empty');
            return;
        }

        if (messageInput.length > 1000) {
            setNotification('Message cannot be longer than 1000 characters');
            return;
        }

        // Send the message to the server
        socket.emit('send-message', {
            recipient: recipient, 
            message: messageInput,
            chatId: chatId,
        });

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