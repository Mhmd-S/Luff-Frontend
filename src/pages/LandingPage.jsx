import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div><div>
    <h1>Welcome To ProjectX</h1>
    <Link to='registration'>
        Join Us
    </Link>
    <Link to='login'>
        Sign In
    </Link>
</div></div>
  )
}

export default LandingPage