import React from 'react'
import { Link } from 'react-router-dom'

const Root = () => {
  return (
    <div>
        <h1>Welcome To ProjectX</h1>
        <Link to='registration'>
            Join Us
        </Link>
        <Link to='sign-in'>
            Sign In
        </Link>
    </div>
  )
}

export default Root