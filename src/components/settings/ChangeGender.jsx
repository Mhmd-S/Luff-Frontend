import React from 'react'
import InitialForm from '../common/InitialForm'
import RadioGroup from '../common/RadioGroup' 
import FormButton2 from '../common/FormButton2'
import useChangeGender from './hooks/useChangeGender'
import FormGeneralError from '../common/FormGeneralError'

const genderOptions = [
  { value: '1', label: 'Male' },
  { value: '2', label: 'Female' },
];

const ChangeBio = () => {

  const {
    register,
    handleSubmit,
    onSubmit,
    generalError,
    user,
    errors,
    loading
  } = useChangeGender();

  return (
    <InitialForm onSubmit={handleSubmit(onSubmit)} loading={loading}>

      <div className='w-full h-full p-4 flex flex-col justify-evenly'>

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

      <div className='w-full h-fit bg-[#fafafa] flex justify-end py-2 px-4  border-t-[1px]'>
        <FormButton2 text='Save' />
      </div>

    </InitialForm>
  )
}

export default ChangeBio