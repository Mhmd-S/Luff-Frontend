import useVerifyEmail from './hooks/useVerifyEmail';
import FormField from '../common/FormField';
import FormButton from '../common/FormButton';
import FormButton2 from '../common/FormButton2';
import InitialForm from '../common/InitialForm';
import FormGeneralError from '../common/FormGeneralError';

const Step2EmailVerification = () => {

  const { 
    onSubmit, 
    handleSubmit, 
    register, 
    loading,
    generalError,
    errors
   } = useVerifyEmail();

  return (
    <div className='w-full h-3/4 flex flex-col justify-evenly bg-white border-[1.5px] border-my-orange p-4 rounded-lg shadow-lg md:w-2/6 md:h-5/6'>
      
      <h3 className='w-full text-center text-xl pt-12'>
        Insert the <span className='text-purple-700 font-bold'>5 digit code</span> sent your email.  
      </h3>
      
      <InitialForm onSubmit={handleSubmit(onSubmit)} >

        <FormGeneralError message={generalError} />

        <FormField
          label='Code'
          name='code'
          type='text'
          register={register}
          errors={errors}
          validationRules={{
            required: 'Code is required',
            pattern: {
              value: /^[a-zA-Z0-9]{5}$/,
              message: 'Invalid code format',
            },
          }}
        />

        <FormButton text='Verify Code' loading={loading} />

      </InitialForm>
    
    </div>
  )
}

export default Step2EmailVerification