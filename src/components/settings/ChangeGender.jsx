import React from 'react'
import InitialForm from '../common/InitialForm'
import RadioGroup from '../common/RadioGroup' 
import FormButton from '../common/FormButton'
import useChangeGender from './hooks/useChangeGender'
import FormGeneralError from '../common/FormGeneralError'

const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
  ];


const ChangeBio = ({ handleGoBack }) => {

  const {
    register,
    handleSubmit,
    onSubmit,
    generalError,
    user,
    errors
  } = useChangeGender();

  return (
    <InitialForm onSubmit={handleSubmit(onSubmit)}>

      <div className='w-full h-full p-4 border-b-[1px]'>

        <h1 className='text-2xl w-full mb-2 font-bold text-grey-900'>
          Change Your Gender
        </h1>  

        <FormGeneralError message={generalError} />

        <RadioGroup 
              label='' 
              name='gender'
              errors={errors}
              register={register}
              options={genderOptions}
              defaultOption={user.gender}
              validationRules={
                {required: 'Gender is required'}
              }
               />
      </div>

      <div className='w-full h-fit bg-[#fafafa] flex justify-end py-2 px-4'>
        <FormButton text='Save' />
      </div>

    </InitialForm>
  )
}

export default ChangeBio