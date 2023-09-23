import axios from 'axios';
import { useToastContext } from '../../contexts/ToastContext';

export const api = axios.create({
    baseURL: 'http://127.0.0.1:3000',
})

// defining a custom error handler for all APIs
const errorHandler = (error) => {

    const { addToast } = useToastContext();

    const statusCode = error.response?.status
    console.log(error);
    addToast(error.message);
    if (error.code === "ERR_BAD_REQUEST") {
        if (error.response && error.response.data) {
            // If the server returned an error response, return it
            return error.response.data;
        } else {
            // If there was no response or the error was not from the server, return a generic error message
            return { status: 'fail', message: 'An error occurred while sending the verification code.' };
        }
    }

    if (error.code == "ERR_NETWORK_ERROR") {
        addToast(error.message);
        return Promise.resolve();
    }

    // logging only errors that are not 401
    if (statusCode && statusCode !== 401) {
        console.error(error)
    }

    return Promise.reject(error)
}

// registering the custom error handler to the
// "api" axios instance
api.interceptors.response.use(undefined, (error) => {
    return errorHandler(error)
})