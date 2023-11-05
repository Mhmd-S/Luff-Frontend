import React, { createContext, useContext, useEffect, useState, useMemo } from 'react'
import { socket } from '../socket-io/socket'
import chatAPI from '../api/chatAPI';

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {

    const [notifications, setNotifications] = useState(0);

    const fetchNotifications = async () => {
        const response = await chatAPI.getUnreadChatsCount();
        return response;
    }  

    // Fetch the notifications number from the server
    useEffect(() => {
        fetchNotifications()
            .then((response)=>{
                if(response.data.status === 'success'){
                    setNotifications(response.data.data);
                }
            })
    }, [])

    // Watch the socket for messages
    useEffect(() => {

        socket.on('receive-message', ( data ) => {
            addNotification();
        })
        
        socket.on('match', ( data ) => {
            addNotification();
        })

        // Cleanup
        return () => {
            socket.off('sent-message', addNotification);
            socket.off('match', addNotification);
          };
        
    }, [])

    const addNotification = () => {
        setNotifications((notifications) => notifications + 1);
    }

    const removeNotification = () => {
        setNotifications((notifications) => notifications - 1);
    }
        
    const memoValue = useMemo(
        () => ({
            notifications,
            removeNotification,
        }),
        [notifications]
    );
    

    return (
        <NotificationContext.Provider value={memoValue}>
            {children}
        </NotificationContext.Provider>
    )
}


export const useNotification = () => {
    return useContext(NotificationContext)
}

