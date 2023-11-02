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
        console.log(pageNum);
        const response = await api.request({
            method: 'GET',
            url: '/chat/chats',
            params: {
                page: pageNum,
            }
        });
        console.log(response);
        return response;
    },

    getUnreadChatsCount: async () => {
        const response = await api.request({
            method: 'GET',
            url: '/chat/get-unread-chats-count',
        });
        return response;
    },
    updateChatToSeen: async (chatId, message) => {
        const response = await api.request({
            method: 'PUT',
            url: `/chat/update-chat-to-seen`,
            data: message,
            params: {
                id: chatId,
            },
        });
        return response;
    }
};

export default chatAPI;
