import { useEmailForm } from './hooks/useEmailForm';
import FormField from '../common/FormField';
import { validatePasswords } from './utils/Step1Validation';
import FormButton from '../common/FormButton';
import FormGeneralError from '../common/FormGeneralError';
import InitialForm from '../common/InitialForm';
import { Link } from 'react-router-dom';

const Step1Email = () => {

  const { 
          register, 
          handleSubmit, 
          onSubmit, 
          watchPassword, 
          generalError,
          loading,
          errors
        } = useEmailForm();

  return (
    <div className='w-full h-3/4 flex flex-col bg-white border-[1.5px] border-[#F76301] p-4 rounded-lg shadow-lg md:w-2/6 md:h-5/6'>
      
      <h3 className='w-full text-center text-xl'>
        Create a new <span className='text-purple-700 font-bold'>account</span>
      </h3>
    
      <InitialForm onSubmit={handleSubmit(onSubmit)} >       

        {generalError && <FormGeneralError message={generalError} /> }

        <FormField
          label='TP email'
          name='email'
          type='email'
          register={register}
          errors={errors}
          placeholder='ex. TP012345@mail.apu.edu.my'
          validationRules={{
            required: 'TP email is required',
            pattern: {
              value: /^TP[0-9]{6}@mail.apu.edu.my$/,
              message: 'Invalid TP email',
            },
          }}
        />

        <FormField
          label='Password'
          name='password'
          type='password'
          placeholder='Do not use your APU password'
          register={register}
          errors={errors}
          validationRules={{
            required: 'Password is required',
            pattern: {
              value: /^[A-Za-z\d@$!%*?&]{8,15}$/,
              message: 'Password must be 8-15 characters long',
            },
          }}
        />

        <FormField
          label='Confirm Password'
          name='confirmPassword'
          type='password'
          register={register}
          errors={errors}
          validationRules={{
            required: 'Confirm Password is required',
            validate: (value) => {
              return validatePasswords(value, watchPassword)
            }
          }}
        />

        <FormButton text='Verify Email' loading={loading}/> 

      </InitialForm>

      <div className='w-full text-center pt-2 flex flex-col'>
            <span>Already have an account? </span> 
            <Link to='/login' className='text-center text-[#F76301] hover:underline'>Log In</Link>
          </div>

      </div>
  )
}

export default Step1Email