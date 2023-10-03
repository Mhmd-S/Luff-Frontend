import { api } from './configs/axiosConfigs'

export const userAPI = {
    sendVerificationCode: async (email) => {
            const response = await api.request({
                method: 'POST',
                url: '/user/verify-email',
                data: {
                    email: email,
                }
            })
            return response;
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
    },
    registerUser: async (email, password) => {
        const response = await api.request({
            method: 'POST',
            url: '/user/register',
            data: {
                email: email,
                password: password,
            }
        })
        return response;
    },
    loginUser: async (email, password) => {
        const response = await api.request({
            method: 'POST',
            url: '/user/login',
            data: {
                email: email,
                password: password,
            }
        })
        return response;
    },
    logoutUser: async () => {
        const response = await api.request({
            method: 'POST',
            url: '/user/logout',
        })
        return response;
    },
    checkAuthStatus: async () => {
        const response = await api.request({
            method: 'GET',
            url: '/user/check-auth',
        })
        return response;
    },
    updateName: async (name) => {
        const response = await api.request({
            method: 'PUT',
            url: '/user/update-name',
            data: {
                name: name,
            }
        })
        return response;
    },
    updateDob: async (dob) => {
        const response = await api.request({
            method: 'PUT',
            url: '/user/update-dob',
            data: {
                dob: dob,
            }
        })
        return response;
    },
    updateBio: async (bio) => {
        const response = await api.request({
            method: 'PUT',
            url: '/user/update-bio',
            data: {
                bio: bio,
            }
        })
        return response;
    },
    uploadProfilePicture: async (file) => {

        const formData = new FormData();

        formData.append('profilePicture', file);

        const response = await api.request({
            method: 'PUT',
            url: '/user/add-profile-pic',
            data: formData,
        })
        return response;
    }
}