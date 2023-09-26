import { useEmailForm } from './hooks/useEmailForm';
import FormField from '../common/FormField';
import { validatePasswords } from './utils/Step1Validation';
import FormButton from '../common/FormButton';

const Step1Email = () => {

  const { 
          emailInput, 
          register, 
          handleSubmit, 
          onSubmit, 
          watchPassword, 
          errors
        } = useEmailForm();

  return (
      <form  
        onSubmit={handleSubmit(onSubmit)}
        className='w-full h-full flex flex-col items-center justify-evenly'
        >
        
        <h3 className='w-full text-center'>
          Please enter your <span className='text-sky-500'>TP Email</span> and <span className='text-sky-500'>Password</span> to get started.
        </h3>

        <FormField
          label='TP email'
          name='email'
          type='email'
          register={register}
          errors={errors}
          validationRules={{
            required: 'TP email is required',
            pattern: {
              value: /^TP[0-9]{6}@mail.apu.edu.my$/,
              message: 'Invalid TP email',
            },
          }}
          defaultValue={emailInput}
        />

        <FormField
          label='Password'
          name='password'
          type='password'
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
              validatePasswords(value, watchPassword.current) || 'Passwords do not match'
            }
          }}
        />

        <FormButton text='Verify Email'/> 
      </form>
  )
}

export default Step1Email