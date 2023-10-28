import { socket } from './sockets';

export const sendMessage = (chatId, recipient, message) => {
    socket.emit('send-message', {
        chatId,
        recipient,
        message
    });
}

export const recieveMessage = (callback) => {
    socket.on('recieve-message', (data) => {
        callback(data);
    });
}