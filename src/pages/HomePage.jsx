import React from 'react'
import { Link } from 'react-router-dom'
import Matching from '../components/matching/Matching'

const Home = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <Matching />
    </div>
  )
}

export default Home