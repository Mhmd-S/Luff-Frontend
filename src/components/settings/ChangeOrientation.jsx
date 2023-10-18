import React from 'react'
import InitialForm from '../common/InitialForm'
import RadioGroup from '../common/RadioGroup' 
import FormButton from '../common/FormButton'
import useChangeGender from './hooks/useChangeGender'

const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
  ];


const ChangeBio = ({ handleGoBack }) => {

  const {
    register,
    handleSubmit,
    onSubmit,
    user,
    errors
  } = useChangeGender();

  return (
    <InitialForm onSubmit={handleSubmit(onSubmit)}>
      <span className='w-full text-xl pl-4' onClick={handleGoBack}>
        Back
      </span>
        
      <h1 className='text-3xl w-full text-center font-bold text-grey-900'>
        Change Your Orientaion
      </h1>  

      <RadioGroup 
            label='Your orientation. (Gender you are interested in))' 
            name='orientation'
            errors={errors}
            register={register}
            options={genderOptions}
            defaultOption={user.orientation}
            validationRules={
              {required: 'Orientation is required'}
            }
             />

       <FormButton text='Save Change' />
    </InitialForm>
  )
}

export default ChangeBio