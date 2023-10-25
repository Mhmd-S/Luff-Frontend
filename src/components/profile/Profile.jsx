import React from 'react'
import useProfile from './hooks/useProfile'
import Card from '../common/Card'

const Profile = () => {

  const { user } = useProfile()

  return (
    <div className='w-full h-full'>
      <Card userInfo={user} />
    </div>
  )
}

export default Profile