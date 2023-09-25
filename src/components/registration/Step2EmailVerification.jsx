import useVerifyEmail from './hooks/useVerifyEmail';
import FormField from '../common/FormField';

const Step2EmailVerification = () => {

  const { 
    onSubmit, 
    handleSubmit, 
    register, 
    errors
   } = useVerifyEmail();

  return (
    <form 
      className='flex flex-col w-1/3'
      onSubmit={handleSubmit(onSubmit)}
      >
      
      <h1>Please enter the 6 digit code we sent you</h1>
        
      <FormField
        label='Code'
        name='code'
        type='text'
        register={register}
        errors={errors}
        validationRules={{
          required: 'Code is required',
          pattern: {
            value: /^[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$/,
            message: 'Invalid code format',
          },
        }}
      />

      <button>
        Verify Code
      </button>

    </form>
  )
}

export default Step2EmailVerification