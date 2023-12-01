import React from 'react'
import useProfile from './hooks/useProfile'
import Card from '../common/Card'
import { Link } from 'react-router-dom'

const Profile = () => {

  const { user } = useProfile()

  return (
    <div className='w-full h-full flex p-2'>
      
      <div className='hidden md:block mt-2 text-slate-900 w-1/3 p-8'>
        <h1 className='text-bold text-4xl underline'>
          Your Card
        </h1>
        <h3 className='text-semi-bold text-2xl'>
          This is how your card will look like! To edit your info <Link to='/settings'><span className='text-sky-500 hover:underline'>click here</span></Link>.
        </h3>
      </div>

      <Card userInfo={user} />
    </div>
  )
}

export default Profile