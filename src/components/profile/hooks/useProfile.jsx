import React from 'react'
import { useAuth } from '../../../contexts/useAuthContext'

const useProfile = () => {

    const { user } = useAuth()

    return {
        user
    }
}

export default useProfile