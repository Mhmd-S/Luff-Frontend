import { api } from './configs/axiosConfigs'

export const userAPI = {
    sendVerificationCode: async (email) => {
            const req = await api.request({
                method: 'POST',
                url: '/user/verify-email',
                data: {
                    email: email,
                }
            })
            return req.response.data;
    },
    verifyCode: async (email, code) => {
        const response = await api.request({
            method: 'POST',
            url: '/user/verify-code',
            data: {
                email: email,
                code: code,
            }
        })
        return response;
    }
}