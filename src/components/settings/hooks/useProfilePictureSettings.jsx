import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { userAPI } from '../../../api/userAPI';
import { useAuth } from '../../../contexts/useAuthContext';
import { useNotification } from '../../../contexts/useNotificationContext';

const useProfilePicutreSettings = () => {

    const { user, getUserInfo } = useAuth();
    const [ generalError, setGeneralError ] = useState('');
    const [ loading, setLoading ] = useState(false);

    const [ usersImages, setUsersImages ] = useState({});
    const { setNotification } = useNotification();

    useEffect(() => {
        setUsersImages(user.profilePictures);
    }, [user.profilePictures]);
    
    const { 
        register, 
        handleSubmit, 
        setError,
        resetField,
        formState: { errors } 
    } = useForm();

    const handleDeleteImage = (index) => {
        // Remove the image from the usersImages object using the index as the key
        const newUsersImages = {...usersImages};
        newUsersImages[index] = '';
        setUsersImages(newUsersImages);
    }

    const onSubmit = async(data) => {
        const pics = Object.values(data);

        // Upload pics through API
        try {
            setLoading(true);

            let picsPromises = pics.map(async(pic, index) => {
                
                if ( pic.length === 0) 
                {
                    
                    if (index < 3) return;
                    
                    // Check if the user has a picture at that index
                    if (user.profilePictures[index] && !usersImages[index]){
                        return await userAPI.deleteProfilePicture(index);
                    } else {
                        return;
                    }
                }

                return await userAPI.uploadProfilePicture(pic[0], index);
            });
            
            const uploadResults = await Promise.all(picsPromises);

            if (uploadResults.some(res => res)) {
                // Check if any of the promises succeeded, then update the user
                await getUserInfo();
                setNotification('Profile Pictures Updated');
            }

        } catch(err) {
            setGeneralError(err.message);
        }
        setLoading(false);
    }

    return { 
        register, 
        handleSubmit, 
        onSubmit,
        setError,
        handleDeleteImage,
        resetField,
        user,
        loading,
        generalError, 
        errors 
    }
}

export default useProfilePicutreSettings;