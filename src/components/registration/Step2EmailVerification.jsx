import useVerifyEmail from './hooks/useVerifyEmail';
import FormField from '../common/FormField';
import FormButton from '../common/FormButton';

const Step2EmailVerification = () => {

  const { 
    onSubmit, 
    handleSubmit, 
    register, 
    errors
   } = useVerifyEmail();

  return (
    <form 
      className='w-full h-full flex flex-col items-center justify-evenly'
      onSubmit={handleSubmit(onSubmit)}
      >
      <div className='h-1/6'>
        <h2 className='pb-4 font-bold text-2xl text-center text-sky-500'>
          Code Sent!
        </h2>  
        <h3 className='w-full text-center'>
          Please enter the 6 digit code we sent you!
        </h3>
      </div>
        
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

      <FormButton text='Verify Code' />

    </form>
  )
}

export default Step2EmailVerification