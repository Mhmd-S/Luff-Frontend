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
      <div className='w-full h-3/4 flex flex-col bg-white border-[1px] border-[#e6e6e6] p-4 rounded-lg shadow-lg md:w-3/5 md:h-3/4'>
        
        <h3 className='w-full text-center text-xl'>
            Please enter your <span className='text-purple-900 font-bold'>TP Email</span> and <span className='text-purple-900 font-bold'>Password</span> to log in.
          </h3>

        <InitialForm onSubmit={handleSubmit(onSubmit)} >
    
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
            }}
          />
  
          <FormButton text='Log In' loading={loading}/> 
          
        </InitialForm>
      
        <div className='w-full text-center pt-2 flex flex-col'>
            <span>Forgot your password? </span> 
            <Link to='/request-reset-password' className='text-center text-[#F76301] hover:underline'>Reset password</Link>
          </div>
          
          <div className='w-full text-center pt-2 flex flex-col'>
            <span>Don't have an account? </span> 
            <Link to='/registration' className='text-center text-[#F76301] hover:underline'>Register</Link>
          </div>
      
      </div>
  )
}

export default LoginForm