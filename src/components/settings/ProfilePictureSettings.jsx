import InitialForm from '../common/InitialForm'
import FileUploadField from '../common/FileUploadField'
import FormButton from '../common/FormButton'
import FormGeneralError from '../common/FormGeneralError'
import useProfilePicutreSettings from './hooks/useProfilePictureSettings'
import FileEditField from '../common/FileEditField'

// The validation is not working properly.

const ProfilePictureSettings = () => {

    const { 
        register, 
        handleSubmit, 
        onSubmit, 
        user,
        resetField,
        setError,
        generalError,
        loading,
        errors 
    } = useProfilePicutreSettings();

    console.log(user);

  return (
    <InitialForm onSubmit={handleSubmit(onSubmit)}>
        
        <span className='w-full text-xl pl-4'>
            Back
        </span>
        
        <h1 className='text-3xl w-full text-center font-bold text-grey-900'>
            Edit Profile Pictures
        </h1>
        
        <FormGeneralError error={generalError} />
        
        <div className='w-full h-[80%] p-2 grid grid-cols-[40%_40%] grid-rows-3 justify-center items-center place-items-center gap-6 md:w-3/5 md:grid-cols-[20%_20%_20%] md:grid-rows-2'>
            
            <FileEditField 
                type='file' 
                name='profilePicture1' 
                register={register}
                errors={errors}
                resetField={resetField}
                setError={setError}
                validationRules={{
                    required: 'Profile Picture is required',
                }}
                usersPicture={user.profilePicutres[0]}
                />

            <FileEditField 
                type='file' 
                name='profilePicture2' 
                register={register}
                errors={errors}
                resetField={resetField}
                setError={setError}
                validationRules={{
                    required: 'Profile Picture is required',
                }}
                usersPicture={user.profilePicutres[0]}
                />

            <FileEditField 
                type='file' 
                name='profilePicture3' 
                register={register}
                errors={errors}
                resetField={resetField}
                setError={setError}
                validationRules={{
                    required: 'Profile Picture is required',
                }}
                usersPicture={user.profilePicutres[0]}
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

        <FormButton loading={loading} text='Save' />

    </InitialForm>
  )
}

export default ProfilePictureSettings