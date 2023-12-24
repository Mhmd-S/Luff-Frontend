import InitialForm from '../common/InitialForm'
import FileUploadField from '../common/FileUploadField'
import useStep2 from './hooks/useStep2'
import FormButton2 from '../common/FormButton2'
import FormGeneralError from '../common/FormGeneralError'

// The validation is not working properly.

const Step2 = ({ nextStep }) => {

    const { 
        register, 
        handleSubmit, 
        onSubmit, 
        resetField,
        setError,
        generalError,
        loading,
        errors 
    } = useStep2( nextStep );

  return (
    <InitialForm onSubmit={handleSubmit(onSubmit)} loading={loading}>
        
        <h1 className='text-3xl text-purple-500 font-bold text-grey-900'>
            Add Photos
        </h1>
        
        <h3 className='text-slate-900'>
            Add at <span className='text-purple-500 font-semibold'>least 3 photos</span>
        </h3>

        <FormGeneralError error={generalError} />
        
        <div className='w-full h-[80%] p-2 grid grid-cols-[40%_40%] grid-rows-3 justify-center items-center place-items-center gap-6 md:w-3/5 md:grid-cols-[20%_20%_20%] md:grid-rows-2'>
            
            <FileUploadField 
                type='file' 
                name='profilePicture1' 
                register={register}
                errors={errors}
                resetField={resetField}
                setError={setError}
                validationRules={{
                    required: 'Profile Picture is required',
                }}
                
                />

            <FileUploadField 
                type='file' 
                name='profilePicture2' 
                register={register}
                errors={errors}
                resetField={resetField}
                setError={setError}
                validationRules={{
                    required: 'Profile Picture is required',
                }}
                />

            <FileUploadField 
                type='file' 
                name='profilePicture3' 
                register={register}
                errors={errors}
                resetField={resetField}
                setError={setError}
                validationRules={{
                    required: 'Profile Picture is required',
                }}
                />

            <FileUploadField 
                type='file' 
                name='profilePicture4' 
                register={register}
                resetField={resetField}
                setError={setError}
                errors={errors}
                />

            <FileUploadField 
                type='file' 
                name='profilePicture5' 
                register={register}
                resetField={resetField}
                setError={setError}
                errors={errors}
                />

            <FileUploadField 
                type='file' 
                name='profilePicture6' 
                register={register}
                errors={errors}
                resetField={resetField}
                setError={setError}
                />
        </div>

        <FormButton2 text='Complete Profile' />

    </InitialForm>
  )
}

export default Step2