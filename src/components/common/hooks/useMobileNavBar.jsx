import React from 'react'
import { useAuth } from '../../../contexts/useAuthContext'

const useMobileNavBar = () => {
  const { user } = useAuth();

  return (
    user,
  )

}

export default useMobileNavBar