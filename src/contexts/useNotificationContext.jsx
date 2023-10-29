import React, { createContext, useContext, useEffect, useState, useMemo } from 'react'
import { socket } from '../socket-io/socket'

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {

    const [notifications, setNotifications] = useState([]);

    // Fetch the notifications from the server
    

    // Watch the socket for messages
    useEffect(() => {

        socket.on('recieve-message', ( data ) => {
            setNotifications(( notifications ) => [ ...notifications, data ])
        })
        
        socket.on('matched', ( data ) => {
            setNotifications(( notifications ) => [ ...notifications, data ])
        })
        
    }, [])

    const removeNotification = (id) => {
        setNotifications((notifications) => notifications.filter((notification) => notification.id !== id))
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

