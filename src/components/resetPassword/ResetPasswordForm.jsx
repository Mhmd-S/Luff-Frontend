import React from 'react'
import InitialForm from '../common/InitialForm'
import FormField from '../common/FormField'
import FormButton from '../common/FormButton'
import { validatePasswords } from '../registration/utils/Step1Validation'
import useResetPasswordForm from './hooks/useResetPasswordForm'

const ResetPasswordForm = ({ nextStep }) => {

    const {
        register,
        handleSubmit,
        onSubmit,
        watchPassword,
        loading,
        errors
    } = useResetPasswordForm( nextStep );

  return (
    <InitialForm onSubmit={handleSubmit(onSubmit)}>
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
  )
}

export default ResetPasswordForm;