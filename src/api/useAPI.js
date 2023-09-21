import { api } from '../configs/axiosConfigs'

export const userAPI = {
    sendVerificationCode: async (email) => {
        const reponse = await api.request({
            method: 'POST',
            url: '/verify-email',
            data: {
                email: email,
            }
        })
        return reponse.data.status;
    },
    verifyCode: async (email, code) => {
        const reponse = await api.request({
            method: 'POST',
            url: '/verify-code',
            data: {
                email: email,
                code: code,
            }
        })
        return reponse.data.status;
    }
}