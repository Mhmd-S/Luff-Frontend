import { api } from './configs/axiosConfigs'

const chatAPI = {
    getChat: async (chatId, pageNum) => {
        const response = await api.request({
            method: 'GET',
            url: '/chat/chat',
            params: {
                chatId: chatId,
                page: pageNum,
            }
        });
        return response;
    },

    getChats: async (pageNum) => {
        const response = await api.request({
            method: 'GET',
            url: '/chat/chats',
            params: {
                page: pageNum,
            }
        });
        return response;
    },

    getUnreadChatsCount: async () => {
        const response = await api.request({
            method: 'GET',
            url: '/chat/get-unread-chats-count',
        });
        return response;
    },
    updateChatToSeen: async (chatId, pageNum) => {
        const response = await api.request({
            method: 'PUT',
            url: `/chat/update-chat-to-seen`,
            params: {
                id: chatId,
                page: pageNum,
            },
        });
        return response;
    },
    updateMessageToSeen: async (messageId) => {
        const response = await api.request({
            method: 'PUT',
            url: `/chat/update-chat-to-seen`,
            params: {
                id: messageId,
            },
        });
        return response;
    }
};

export default chatAPI; 
