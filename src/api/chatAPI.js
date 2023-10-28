import { api } from './configs/axiosConfigs'

const chatAPI = {
    getChat: async (chatId, pageNum) => {
        try {
            const response = await api.get(`/chat/get-chat?chatId=${chatId}&page=${pageNum}`);
            return response.data;
        } catch (err) {
            console.log('Could not process your request at the moment. Try again later!');
        }
    },

    getChats: async (pageNum) => {
        try {
            const response = await api.get(`/chat/user-contacts?page=${pageNum}`);
            return response.data;
        } catch (err) {
            console.log('Could not process your request at the moment. Try again later!')
        }
    },

    createChat: async (participants) => {
        try {
            const response = await api.post('/create-chat', participants, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
            return response.data;
        } catch (err) {
            console.log('Could not process your request at the moment. Please try again later.');
        }
    },

    addToChat: async (chatId, message) => {
        try {
            const response = await api.post(`/chat/${chatId}`, message);
            return response.data;
        } catch (err) {
            console.log('Could not process your request at the moment. Try again later!')
        }    
    }
};

export default chatAPI;
