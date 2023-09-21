import React from 'react'

const Step1Email = () => {
  return (
    <div>
        <label htmlFor='email' >TP email</label>
        <input 
            type='email'
            name='email'
        />
        <button>
            Verify Email
        </button>
    </div>
  )
}

export default Step1Email