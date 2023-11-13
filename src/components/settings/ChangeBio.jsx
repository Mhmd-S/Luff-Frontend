import React from 'react'
import InitialForm from '../common/InitialForm'
import FormFieldTextArea from '../common/FormFieldTextArea'
import FormButton2 from '../common/FormButton2'
import useChangeBio from './hooks/useChangeBio'
import FormGeneralError from '../common/FormGeneralError'

const ChangeBio = ({ handleGoBack }) => {

  const {
    register,
    handleSubmit,
    onSubmit,
    generalError,
    user,
    errors
  } = useChangeBio();

  return (
    <InitialForm onSubmit={handleSubmit(onSubmit)}>
 
      <div className='w-full h-full p-4'>

        <h1 className='text-2xl p-2 mb-2 w-full font-bold text-grey-900'>
          Edit Your Bio
        </h1>  

        <FormGeneralError message={generalError} />

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
      </div>

      <div className='w-full h-fit bg-[#fafafa] flex justify-end py-2 px-4 border-t-[1px]'>
        <FormButton2 text='Save' />
      </div>

    </InitialForm>
  )
}

export default ChangeBio