import React from 'react'
import { useAuth } from '../contexts/useAuthContext'

const DashboardPage = () => {

  const { user } = useAuth()

  return (
    <div>{user?.email}</div>
  )
}

export default DashboardPage