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
      <InitialForm onSubmit={handleSubmit(onSubmit)} >  
        
        <h3 className='w-full text-center text-xl'>
          Please enter your <span className='text-sky-500'>TP Email</span> and <span className='text-sky-500'>Password</span> to get started.
        </h3>

        { generalError && <FormGeneralError message={generalError} /> }

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
      {/* Watch not working */}
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
  )
}

export default Step1Email