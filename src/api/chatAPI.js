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

    createChat: async (participants) => {
        const response = await api.request({
            method: 'POST',
            url: '/create-chat',
            data: participants,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        return response;
    },
    // Add update chat to seen make them params instead of injecting it into the url
    // addToChat: async (chatId, message) => {
    //     const response = await api.request({
    //         method: 'POST',
    //         url: `/chat`,
    //         data: message,
    //         params: {
    //             id: chatId,
    //         },
    //     });
    //     return response;
    // }
};

export default chatAPI;
