import { useEmailForm } from './hooks/useEmailForm';

const Step1Email = () => {

  const { verifyEmail, emailInput, handleEmailChange, errorMessage} = useEmailForm();

  return (
    <div className='flex flex-col w-1/3'>
        
        <label htmlFor='email' >TP email</label>
        
        <input 
            type='email'
            name='email'
            onChange={(e)=>handleEmailChange(e)}
            value={emailInput}
        />

        {errorMessage && <p>{errorMessage}</p>}

        <button onClick={verifyEmail}>
          Verify Email
        </button>
    
    </div>
  )
}

export default Step1Email