import React, { useState } from 'react'
import { socket } from '../../../socket-io/socket';

const useMessageField = ({ recipient, chatId }) => {

    const [messageInput, setMessageInput] = useState('');

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