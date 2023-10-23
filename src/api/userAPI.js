import { api } from './configs/axiosConfigs'
import axios from 'axios';

export const userAPI = {
    sendVerificationCode: async (email) => {
            const response = await api.request({
                method: 'POST',
                url: '/registration/verify-email',
                data: {
                    email: email,
                }
            })
            return response;
    },
    getSelf: async () => {
        const response = await api.request({
            method: 'GET',
            url: '/user/get-self',
        })
        return response;
    },
    verifyCode: async (email, code) => {
        const response = await api.request({
            method: 'POST',
            url: '/registration/verify-code',
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
            url: '/registration/register',
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
    updateGender: async(gender) => {
        const response = await api.request({
            method: 'PUT',
            url: '/user/update-gender',
            data: {
                gender: gender,
            }
        })
        return response;
    },
    updateOrientation: async(orientation) => {
        const response = await api.request({
            method: 'PUT',
            url: '/user/update-orientation',
            data: {
                orientaion: orientation
            }
        })
        return response;
    },
    uploadProfilePicture: async (file, picNum) => {

        const formData = new FormData();

        formData.append('profilePicture', file);

        formData.append('picNum', picNum);

        // Send the form data to the API endpoint
        const response = await api.request({
            method: 'PUT',
            url: '/user/add-profile-pic',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        })

        return response;
    },
    deleteProfilePicture: async (picNum) => {
        const response = await api.request({
            method: 'DELETE',
            url: '/user/delete-profile-pic',
            data: {
                picNum: picNum,
            }
        })
        return response;
    },
    onboardNext: async () => {
        const response = await api.request({
            method: 'PUT',
            url: '/user/onboard-next',
        })
        return response;
    },
    requestResetPassword: async (email) => {
        const response = await api.request({
            method: 'POST',
            url: '/reset/request-reset-password',
            data: {
                email: email,
            }
        })
        return response;
    },
    resetPassword: async (token, userId, password) => {
        const response = await api.request({
            method: 'POST',
            url: '/reset/reset-password',
            params: {
                token: token,
                id: userId,
            },
            data: {
                password: password,
            }
        })
        return response;
    },
}