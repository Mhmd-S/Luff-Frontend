import React from 'react'
import InitialForm from '../common/InitialForm'
import FormFieldTextArea from '../common/FormFieldTextArea'
import FormButton from '../common/FormButton'
import useChangeBio from './hooks/useChangeBio'

const ChangeBio = ({ handleGoBack }) => {

  const {
    register,
    handleSubmit,
    onSubmit,
    user,
    errors
  } = useChangeBio();

  return (
    <InitialForm onSubmit={handleSubmit(onSubmit)}>
      <span className='w-full text-xl pl-4' onClick={handleGoBack}>
        Back
      </span>
        
      <h1 className='text-3xl w-full text-center font-bold text-grey-900'>
        Edit Your Bio
      </h1>  

      <FormFieldTextArea 
          type='text' 
          name='Bio' 
          register={register}
          errors={errors}
          placeholder='Bio'
          validationRules={
            {
              required: 'Bio is required',
              minLength: {
                value: 3,
                message: 'Bio must be at least 3 characters'
              },
              maxLength: {
                value: 100,
                message: 'Bio must be at most 100 characters'
              }
            }
          }
          defaultValue={user.bio}
          />

       <FormButton text='Save Change' />
    </InitialForm>
  )
}

export default ChangeBio