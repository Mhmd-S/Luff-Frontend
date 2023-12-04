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
            name='bio' 
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
                  value: 250,
                  message: 'Bio must be at most 250 characters'
                }
              }
            }
            defaultValue={user.bio}
            />
      </div>

      <div className='w-full h-fit bg-[#fafafa] flex justify-end py-2 px-4 border-t-[1px] md:bg-transparent md:border-t-0 md:border-b-2'>
        <FormButton2 text='Save' />
      </div>

    </InitialForm>
  )
}

export default ChangeBio