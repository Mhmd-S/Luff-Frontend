import useVerifyEmail from './hooks/useVerifyEmail';
import useRegistrationContext from './context/useRegistrationContext';

const Step2EmailVerification = () => {

  const { goPrevStage } = useRegistrationContext();
  const { codeInput, handleCodeChange, handleVerifyCode, errorMessage } = useVerifyEmail();

  return (
    <div className='flex flex-col w-1/3'>
      
      <h1>Please enter the 6 digit code we sent you</h1>
      
      <label htmlFor='code' >Code</label>
        
        <input 
            type='code'
            name='text'
            onChange={(e)=>handleCodeChange(e)}
            value={codeInput}
        />

        { errorMessage && <p>{errorMessage}</p> }

        <button onClick={goPrevStage}>
          Back
        </button>

        <button onClick={handleVerifyCode}>
          Verify Code
        </button>

        <button>
          Send Code Again
        </button>

    </div>
  )
}

export default Step2EmailVerification