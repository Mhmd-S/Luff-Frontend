import React from 'react'
import { useEmailForm } from './hooks/useEmailForm'

const Step1Email = () => {

  const { verifyEmail, emailInput, handleEmailChange} = useEmailForm();

  return (
    <div>
        <label htmlFor='email' >TP email</label>
        <input 
            type='email'
            name='email'
            onChange={(e)=>handleEmailChange(e)}
            value={emailInput}
        />
        <button onClick={verifyEmail}>
            Verify Email
        </button>
    </div>
  )
}

export default Step1Email