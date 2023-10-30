import React, { useEffect } from 'react'
import { useNotification } from '../../../contexts/useNotificationContext'


const useChatIcon = () => {

  const { notifications } = useNotification();

  const [ notificationNumb, setNotificationNumb ] = React.useState(0);

  useEffect(() => { setNotificationNumb(notifications) },[notifications])

  return {
    notificationNumb,
  } 
  
}



export default useChatIcon