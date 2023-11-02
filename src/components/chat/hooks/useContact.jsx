import React from 'react'
import { useAuth } from '../../../contexts/useAuthContext'

const useContact = () => {

    const { user } = useAuth();

  return {
    user,
  }
}

export default useContact