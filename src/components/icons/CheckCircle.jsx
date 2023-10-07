import React from 'react'

const CheckCircle = ({ size, color }) => {
  return (
    <div className={`w-${size} h-${size}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 50 50" strokeWidth={1.5} stroke={color}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    </div>
  )
}

export default CheckCircle