import React from 'react'
import InitialForm from '../common/InitialForm'
import FormField from '../common/FormField'
import useRequestResetPasswordForm from './hooks/useRequestResetPasswordForm'
import FormGeneralError from '../common/FormGeneralError'
import FormButton from '../common/FormButton'

const RequestResetPassword = ({ nextStep }) => {

    const {
        register,
        handleSubmit,
        onSubmit,
        errors,
        generalError,
        loading
    } = useRequestResetPasswordForm({ nextStep });

    return (
      <InitialForm onSubmit={handleSubmit(onSubmit)}>  

        <h1 className='text-3xl font-bold'>
            Change Your Password
        </h1>

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

        <FormButton loading={loading} text='Request Reset Password' />

      </InitialForm>
    )
}

export default RequestResetPassword