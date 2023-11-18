import React from 'react'
import InitialForm from '../common/InitialForm'
import FormField from '../common/FormField'
import FormButton from '../common/FormButton'
import { validatePasswords } from '../registration/utils/Step1Validation'
import useResetPasswordForm from './hooks/useResetPasswordForm'
import FormGeneralError from '../common/FormGeneralError'
import { Link } from 'react-router-dom'

const ResetPasswordForm = ({ nextStep }) => {

    const {
        register,
        handleSubmit,
        onSubmit,
        watchPassword,
        loading,
        generalError,
        errors
    } = useResetPasswordForm( nextStep );

  return (
    <div className='w-full h-1/2 flex flex-col justify-evenly bg-white border-[1px] border-[#e6e6e6] p-4 rounded-lg shadow-lg md:w-2/6 md:h-5/6'>

    <InitialForm onSubmit={handleSubmit(onSubmit)}>

      <h1 className='text-3xl font-bold'>
        Change Your Password
      </h1>

      { generalError && <FormGeneralError message={generalError} /> }

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
            value: /^[A-Za-z\d@$!%*?&]{8,25}$/,
            message: 'Password must be 8-25 characters long',
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

        <FormButton loading={loading} text='Change Password' />
    
      </InitialForm>    
    
    </div>
  )
}

export default ResetPasswordForm;