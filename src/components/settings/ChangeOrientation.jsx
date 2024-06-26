import React from 'react'
import InitialForm from '../common/InitialForm'
import RadioGroup from '../common/RadioGroup' 
import FormButton2 from '../common/FormButton2'
import FormGeneralError from '../common/FormGeneralError'
import useChangeOrientation from './hooks/useOrientation'

const genderOptions = [
    { value: '1', label: 'Men' },
    { value: '2', label: 'Women' },
  ];

const ChangeBio = ({ handleGoBack }) => {

  const {
    register,
    handleSubmit,
    onSubmit,
    generalError,
    user,
    errors,
    loading
  } = useChangeOrientation();

  return (
      <InitialForm onSubmit={handleSubmit(onSubmit)} loading={loading} >

        <div className='w-full h-full p-4 flex flex-col items-center justify-evenly'>

          <h1 className='text-xl w-full mb-2 font-bold text-grey-900'>
            Change Your Orientaion
          </h1>  

          <FormGeneralError message={generalError} />

          <RadioGroup 
                label='' 
                name='orientation'
                errors={errors}
                register={register}
                options={genderOptions}
                defaultOption={user.orientation}
                validationRules={
                  {required: 'Orientation is required'}
                }
                 />
        </div>

        <div className='w-full h-fit flex justify-end py-2 px-4 bg-transparent border-t-0 border-b-2'>
         <FormButton2 text='Save' />
        </div>

      </InitialForm>
  )
}

export default ChangeBio