import React from 'react';

const useUserInfo = (userInfo) => {
    const renderImages = () => {
        if (!userInfo || !userInfo.profilePictures) return null;

        return Object.entries(userInfo.profilePictures).map(([key, image]) => {
            if (!image) return null;
            return (
                <img
                    key={key}
                    src={image}
                    alt="User Profile Picture"
                    className="relative object-cover object-center rounded-lg"
                />
            );
        });
    };

    return {
        renderImages,
    };
};

export default useUserInfo;
