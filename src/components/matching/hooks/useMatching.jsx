import React, { useState, useEffect } from 'react';
import Card from '../../common/Card';
import { userAPI } from '../../../api/userAPI';
import Matched from '../../common/Matched';

const useMatching = () => {
    // Fetch users
    const [users, setUsers] = useState([]);
    const [matched, setMatched] = useState({
        "email": "Alysson_Roberts@gmail.com",
        "password": "Onq_BaNWmjQlWkq",
        "name": "Latoya Fritsch",
        "dob": {
          "$date": {
            "$numberLong": "-239799702363"
          }
        },
        "gender": "male",
        "orientation": "female",
        "matches": [],
        "likedUsers": [],
        "profilePictures": {
          "0": "",
          "1": "",
          "2": "",
          "3": "",
          "4": "",
          "5": ""
        },
        "blockedUsers": [],
        "bio": "neck supporter, educator 🦟",
        "verified": false,
        "onboardStep": 2,
        "createdAt": {
          "$date": "2023-10-23T13:16:14.205Z"
        },
        "updatedAt": {
          "$date": "2023-10-23T13:16:14.205Z"
        },
        "__v": 0
      });
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const response = await userAPI.getUsers();
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
        console.log(result);
        if (result.data?.data) {
            setMatched(result.data.data);
        }
        setUsers(prev => prev.filter(user => user._id !== id));
        
        if (users.length === 0) {
            fetchUsers();
        }

        setLoading(false);
    };

    const handleReject = async (id) => {
        setLoading(true);
        await userAPI.rejectUser(id);
        setUsers(prev => prev.filter(user => user._id !== id));
        if (users.length === 0) {
            fetchUsers();
        }
        setLoading(false);
    };

    const closeMatched = () => {
        setMatched(null);
    };

    const renderUser = () => {
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
        users,
        loading,
        renderUser,
    };
};

export default useMatching;
