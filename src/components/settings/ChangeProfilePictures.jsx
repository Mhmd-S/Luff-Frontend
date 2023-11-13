import InitialForm from '../common/InitialForm'
import FileUploadField from '../common/FileUploadField'
import FormButton2 from '../common/FormButton2'
import FormGeneralError from '../common/FormGeneralError'
import useProfilePicutreSettings from './hooks/useProfilePictureSettings'
import FileEditField from '../common/FileEditField'
import BackIcon from '../icons/BackIcon'

const ChangeProfilePictures = ({ handleGoBack }) => {

    const { 
        register, 
        handleSubmit, 
        onSubmit,
        handleDeleteImage, 
        user,
        resetField,
        setError,
        generalError,
        loading,
        errors 
    } = useProfilePicutreSettings();

  return (
    <InitialForm onSubmit={handleSubmit(onSubmit)} loading={loading}>
        
        <span className='w-full text-xl pt-4 pl-4 hover:cursor-pointer' onClick={handleGoBack}>
            <BackIcon/>
        </span>
        
        <h1 className='text-2xl w-full text-center font-semibold text-grey-900'>
            Edit Profile Pictures
        </h1>
        
        <FormGeneralError error={generalError} />
        
        <div className={`w-full h-[80%] p-2 grid grid-cols-[40%_40%] grid-rows-3 justify-center items-center place-items-center gap-6 md:w-3/5 md:grid-cols-[20%_20%_20%] md:grid-rows-2`}>
            
            <FileEditField 
                type='file' 
                name='profilePicture1' 
                register={register}
                errors={errors}
                resetField={resetField}
                setError={setError}
                usersPicture={user.profilePictures[0]}
                />

            <FileEditField 
                type='file' 
                name='profilePicture2' 
                register={register}
                errors={errors}
                resetField={resetField}
                setError={setError}
                usersPicture={user.profilePictures[1]}
                />

            <FileEditField 
                type='file' 
                name='profilePicture3' 
                register={register}
                errors={errors}
                resetField={resetField}
                setError={setError}
                usersPicture={user.profilePictures[2]}
                />

            <FileUploadField 
                type='file' 
                name='profilePicture4' 
                register={register}
                resetField={resetField}
                setError={setError}
                errors={errors}
                usersPicture={user.profilePictures[3]}
                handleDeleteImage={()=>handleDeleteImage(3)}
                />

            <FileUploadField 
                type='file' 
                name='profilePicture5' 
                register={register}
                resetField={resetField}
                setError={setError}
                errors={errors}
                usersPicture={user.profilePictures[4]}
                handleDeleteImage={()=>handleDeleteImage(4)}
                />

            <FileUploadField 
                type='file' 
                name='profilePicture6' 
                register={register}
                errors={errors}
                resetField={resetField}
                setError={setError}
                usersPicture={user.profilePictures[5]}
                handleDeleteImage={()=>handleDeleteImage(5)}
                />
        </div>

        <FormButton2 loading={loading} text='Save' />

    </InitialForm>
  )
}

export default ChangeProfilePictures