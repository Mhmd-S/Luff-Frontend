import FormFieldError from './FormFieldError';
import AddIcon from '../icons/AddIcon';
import LoadingIcon from '../icons/LoadingIcon';
import useFileEditField from './hooks/useFileEditField';
import EditIcon from '../icons/EditIcon';

const FileEditField = ({
  name,
  register,
  errors,
  setError,
  validationRules,
  usersPicture,
  resetField,
}) => {

  const { 
    imageFile, 
    isLoading, 
    handleFileChange, 
    handleEditImage 
  } = useFileEditField({ name, setError, usersPicture, resetField });

  return (
    <div className={`h-full w-full relative flex justify-center items-center border-2 rounded-sm bg-slate-100  ${errors[name] && 'border-2 border-pink-600'}`}>

      { isLoading && 
      <div className='w-full h-full flex justify-center items-center bg-slate-100 absolute'>
        <LoadingIcon /> 
      </div>
        }

      {/* The icon for adding an image */}
      <label htmlFor={name}  className={`h-full w-full flex flex-col p-2 text-center items-center justify-center absolute ${imageFile && 'hidden'} `}>

        <AddIcon color={errors[name] ? 'red' : 'black'} />
        <FormFieldError name={name} errors={errors} />
      
      </label>

      {/* The remove button for an image */}
      {imageFile && 
        <>
            <div className='right-[-5%] top-[-5%] absolute cursor-pointer rounded-xl bg-slate-300 z-10'>
                <EditIcon color='black' onClick={handleEditImage} />
                <input
                    type='file'
                    name={name}
                    accept='image/png, image/jpeg'
                    {...register(name, validationRules)}
                    onInput={handleFileChange}
                    className={`opacity-0 w-full h-full absolute`}
                />
            </div>
            <img className='w-full h-full object-cover relative' src={typeof imageFile == 'string' ? imageFile : URL.createObjectURL(imageFile)} alt='Preview' />
        </> 
      }

      { !imageFile && 
      <input
        type='file'
        name={name}
        accept='image/png, image/jpeg'
        {...register(name, validationRules)}
        onInput={handleFileChange}
        className={`opacity-0 absolute w-full h-full`}
      />
      }

    </div>
  );
};

export default FileEditField;
