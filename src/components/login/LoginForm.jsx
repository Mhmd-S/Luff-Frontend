import FormField from '../common/FormField';
import FormButton from '../common/FormButton';
import FormGeneralError from '../common/FormGeneralError';
import useLogin from './hooks/useLogin';
import InitialForm from '../common/InitialForm';
import { Link } from 'react-router-dom';

const LoginForm = () => {

  const { 
          register, 
          handleSubmit, 
          onSubmit, 
          generalError,
          loading,
          errors
        } = useLogin();

  return (
      <InitialForm onSubmit={handleSubmit(onSubmit)} >
        
        <h3 className='w-full text-center'>
          Please enter your <span className='text-sky-500'>TP Email</span> and <span className='text-sky-500'>Password</span> to log in.
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

        <FormButton text='Verify Email' loading={loading}/> 

        <div className='w-full text-center pt-2'>
          <span>Don't have an account? </span> 
          <Link to='/registration' className='text-center text-sky-500 hover:text-sky-600'>Register here</Link>
        </div>

      </InitialForm>
  )
}

export default LoginForm