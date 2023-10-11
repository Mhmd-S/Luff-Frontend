import React from 'react'
import InitalForm from '../common/InitialForm'
import FormField from '../common/FormField'
import useChangePassword from './hooks/useChangePassword';
import FormGeneralError from '../common/FormGeneralError';
import FormButton from '../common/FormButton';

const ChangePassword = () => {

    const { 
        register, 
        handleSubmit, 
        onSubmit, 
        loading, 
        errors, 
        generalError 
      } = useChangePassword();
    
  return (
    <InitalForm onSubmit={handleSubmit(onSubmit)}>

        <div className="w-full grid grid-row-1 grid-cols-[30%_70%]">
            <span className="w-fit">Go Back</span>
            <h1 className="text-xl">Change Password</h1>
        </div>

        <FormGeneralError message={generalError} />

        <FormField
            label='Old Password'
            name='oldPassword'
            type='password'
            placeholder='Old Password'
            register={register}
            errors={errors}
            validationRules={{
              required: 'Old password is required',
                pattern: {
                    value: /^[a-zA-Z]{1,15} [a-zA-Z]{1,15}$/,
                    message: 'Name must only contain letters, a space, and must be less than 30 characters long',
                },
            }}
        />

        <FormField
            label='New Password'
            name='newPassword'
            type='password'
            placeholder='new Password'
            register={register}
            errors={errors}
            validationRules={{
              required: 'New password is required',
                pattern: {
                    value: /^[a-zA-Z]{1,15} [a-zA-Z]{1,15}$/,
                    message: 'Name must only contain letters, a space, and must be less than 30 characters long',
                },
            }}
        />

        <FormButton loading={loading} text='Change Password' />

    </InitalForm>
  )
}

export default ChangePassword