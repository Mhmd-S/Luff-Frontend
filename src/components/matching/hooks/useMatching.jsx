import React, { useState, useEffect } from 'react';
import Card from '../../common/Card';
import { userAPI } from '../../../api/userAPI';
import Matched from '../../common/Matched';

const useMatching = () => {
    // Fetch users
    const [users, setUsers] = useState([]);
    const [matched, setMatched] = useState(null);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const response = await userAPI.getUsers();
            setUsers(response.data.data);
        } catch (err) {
            setError('Ops! Something went wrong. Please try again later.');
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
        console.log(result);
        if (result.data?.data) {
            setMatched(result.data.data);
        }
        setUsers(prev => prev.filter(user => user._id !== id));
        
        if (users.length < 5) {
            fetchUsers();
        }

        setLoading(false);
    };

    const handleReject = async (id) => {
        setLoading(true);
        await userAPI.rejectUser(id);
        setUsers(prev => prev.filter(user => user._id !== id));
        if (users.length < 5) {
            fetchUsers();
        }
        setLoading(false);
    };

    const closeMatched = () => {
        setMatched(null);
    };

    const renderUser = () => {

        if (err) {
            return <h1>{err}</h1>;
        }

        if (matched) {
            return <Matched userInfo={matched} handleClick={closeMatched} />;
        }

        const user = users[0];

        if (!user?._id) {
            return <h1>There are no more users to display</h1>;
        }

        return (
            <Card
                userInfo={user}
                key={user._id}
                handleLike={() => handleLike(user._id)}
                handleReject={() => handleReject(user._id)}
            />
        );
    };

    return {
        renderUser,
    };
};

export default useMatching;
