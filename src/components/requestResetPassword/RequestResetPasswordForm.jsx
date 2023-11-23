import React from 'react'
import InitialForm from '../common/InitialForm'
import FormField from '../common/FormField'
import useRequestResetPasswordForm from './hooks/useRequestResetPasswordForm'
import FormGeneralError from '../common/FormGeneralError'
import FormButton from '../common/FormButton'
import { Link } from 'react-router-dom'

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
      <div className='w-full h-1/2 flex flex-col justify-evenly bg-white border-[1.5px] border-my-orange p-4 rounded-lg shadow-lg md:w-2/6 md:h-5/6'>

      <InitialForm onSubmit={handleSubmit(onSubmit)}>  

        <h1 className='text-3xl font-bold text-purple-500'>
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

      <div className='w-full text-center pt-2 flex flex-col'>
        <span>Found your password? </span> 
        <Link to='/login' className='text-center text-[#F76301] hover:underline'>Log In</Link>
      </div>

    </div>
    )
}

export default RequestResetPassword