import React, { useState, useEffect } from 'react';
import Card from '../../common/Card';
import { userAPI } from '../../../api/userAPI';

const useMatching = () => {
    // Fetch users
    const [users, setUsers] = useState([]);
    const [userIndex, setUserIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const response = await userAPI.getUsers();
            if (response.data.data.length === 0) {
                setUserIndex(-1);
            }
            setUsers(response.data.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers(); // Call the fetchUsers function to initiate the data fetching
    }, []);

    const handleLike = async (id) => {
        setLoading(true);
        const result = await userAPI.likeUser(id);
        setUserIndex(userIndex + 1);
        setLoading(false);
    };

    const handleReject = async (id) => {
        setLoading(true);
        const result = await userAPI.rejectUser(id);
        setUserIndex(userIndex + 1);
        setLoading(false);
    };

    const renderUser = () => {

        if (userIndex == -1) {
            return (
                <div>
                    <h1 className='text-3xl text-center'>No more users to match :/</h1>
                </div>
            )
        }

        const user = users[userIndex];

        if (userIndex >= users.length) {
            fetchUsers();
        }

        return (
            <Card userInfo={user} key={user._id} handleLike={() => handleLike(user._id)} handleReject={() => handleReject(user._id)} />
        );
    };

    return {
        users,
        loading,
        renderUser,
    };
};

export default useMatching;
