import React from 'react'
import InitialForm from '../common/InitialForm'
import FileUploadField from '../common/FileUploadField'
import useStep2 from './hooks/useStep2'
import FormButton from '../common/FormButton'
import FormGeneralError from '../common/FormGeneralError'

const Step2 = () => {

    const { 
        register, 
        handleSubmit, 
        onSubmit, 
        resetField,
        generalError,
        loading, 
        errors 
    } = useStep2();

  return (
    <InitialForm onSubmit={handleSubmit(onSubmit)}>
        
        <h1 className='text-3xl font-bold text-grey-900'>
            Add Photos
        </h1>
        
        <h3 className='text-slate-500'>
            Add at least 3 photos
        </h3>

        <FormGeneralError error={generalError} />
        
        <div className='w-full h-[80%] p-2 grid grid-cols-[40%_40%] grid-rows-3 justify-center items-center place-items-center gap-6 md:w-3/5 md:grid-cols-[20%_20%_20%] md:grid-rows-2'>
            
            <FileUploadField 
                type='file' 
                name='profilePicture1' 
                label='Profile Picture'
                register={register}
                errors={errors}
                resetField={resetField}
                validationRules={{
                    required: 'Profile Picture is required',
                }}
                />

            <FileUploadField 
                type='file' 
                name='profilePicture2' 
                label='Profile Picture'
                register={register}
                errors={errors}
                resetField={resetField}
                validationRules={{
                    required: 'Profile Picture is required',
                }}
                />

            <FileUploadField 
                type='file' 
                name='profilePicture3' 
                label='Profile Picture'
                register={register}
                errors={errors}
                resetField={resetField}
                validationRules={{
                    required: 'Profile Picture is required',
                }}
                />

            <FileUploadField 
                type='file' 
                name='profilePicture4' 
                label='Profile Picture'
                register={register}
                resetField={resetField}
                errors={errors}
                />

            <FileUploadField 
                type='file' 
                name='profilePicture5' 
                label='Profile Picture'
                register={register}
                resetField={resetField}
                errors={errors}
                />

            <FileUploadField 
                type='file' 
                name='profilePicture6' 
                label='Profile Picture'
                register={register}
                errors={errors}
                resetField={resetField}
                />
        </div>

        <FormButton loading={loading} text='Complete Profile' />

    </InitialForm>
  )
}

export default Step2