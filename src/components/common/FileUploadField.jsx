import FormFieldError from './FormFieldError';
import AddIcon from '../icons/AddIcon';
import RemoveIcon from '../icons/RemoveIcon';
import LoadingIcon from '../icons/LoadingIcon';
import useFileUploadField from './hooks/useFileUploadField';

const FileUploadField = ({
  name,
  register,
  errors,
  setError,
  validationRules,
  usersPicture,
  resetField,
  ...inputProps
}) => {

  const { 
    imageFile, 
    isLoading, 
    handleFileChange, 
    handleRemoveImage
  } = useFileUploadField({ name, setError, resetField, usersPicture });

  return (
    <div className={`h-full w-full relative flex justify-center items-center border-2 rounded-sm bg-slate-100  ${errors[name] && 'border-2 border-pink-600'}`}>

      { isLoading ? <LoadingIcon /> : null }

      {/* The icon for adding an image */}
      <label htmlFor={name}  className={`h-full w-full flex flex-col p-2 text-center items-center justify-center absolute ${imageFile && 'hidden'} `}>

        <AddIcon color={errors[name] ? 'red' : 'black'} />
        <FormFieldError name={name} errors={errors} />
      
      </label>

      {/* The remove button for an image */}
      {imageFile && 
        <>
          <div className='z-10'>
            <RemoveIcon color='red' handleClick={()=>{handleRemoveImage(); inputProps?.handleDeleteImage()}} />
          </div>
          <img className='w-full h-full object-cover relative' src={typeof imageFile == 'string' ? imageFile : URL.createObjectURL(imageFile)} alt='Preview' />
        </> 
      }

      <input
        type='file'
        name={name}
        accept='image/png, image/gif, image/jpeg'
        {...register(name, validationRules)}
        onInput={handleFileChange}
        className={`opacity-0 absolute w-full h-full ${imageFile && 'hidden'}`}
      />

    </div>
  );
};

export default FileUploadField;
