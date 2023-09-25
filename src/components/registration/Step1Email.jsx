import { useEmailForm } from './hooks/useEmailForm';
import FormField from '../common/FormField';
import { validatePasswords } from './utils/Step1Validation';

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
      className='flex flex-col w-1/3'
      >

      <FormField
        label='TP email'
        name='email'
        type='email'
        register={register}
        errors={errors}
        validationRules={{
          required: 'TP email is required',
          pattern: {
            value: /^TP[0-9]{5}@mail.apu.edu.my$/,
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
          validate: (value) =>
            validatePasswords(value, watchPassword.current) || 'Passwords do not match',
        }}
      />

      <button>
        Verify Email
      </button>
    </form>
  )
}

export default Step1Email