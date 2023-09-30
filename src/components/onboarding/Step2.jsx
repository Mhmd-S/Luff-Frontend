import React from 'react'
import InitialForm from '../common/InitialForm'
import FileUploadField from '../common/FileUploadField'
import useStep2 from './hooks/useStep2'
import FormButton from '../common/FormButton'

const Step2 = () => {

    const { 
        register, 
        handleSubmit, 
        onSubmit, 
        resetField,
        loading, 
        errors 
    } = useStep2();

  return (
    <InitialForm onSubmit={handleSubmit(onSubmit)}>
        <h1>Step 2</h1>
        
        <div className='w-full h-full grid grid-cols-2 grid-rows-3 justify-evenly items-center place-items-center gap-6'>
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
                name='profilePicture1' 
                label='Profile Picture'
                register={register}
                errors={errors}
                validationRules={{
                    required: 'Profile Picture is required',
                }}
                />

            <FileUploadField 
                type='file' 
                name='profilePicture1' 
                label='Profile Picture'
                register={register}
                errors={errors}
                validationRules={{
                    required: 'Profile Picture is required',
                }}
                />

            <FileUploadField 
                type='file' 
                name='profilePicture1' 
                label='Profile Picture'
                register={register}
                errors={errors}
                validationRules={{
                    required: 'Profile Picture is required',
                }}
                />

            <FileUploadField 
                type='file' 
                name='profilePicture1' 
                label='Profile Picture'
                register={register}
                errors={errors}
                validationRules={{
                    required: 'Profile Picture is required',
                }}
                />

            <FileUploadField 
                type='file' 
                name='profilePicture1' 
                label='Profile Picture'
                register={register}
                errors={errors}
                validationRules={{
                    required: 'Profile Picture is required',
                }}
                />
        </div>

        <FormButton loading={loading} text='Next' />

    </InitialForm>
  )
}

export default Step2