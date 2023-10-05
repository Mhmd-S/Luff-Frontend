import React, { useState } from 'react';
import FormFieldError from './FormFieldError';
import AddIcon from './AddIcon';
import RemoveIcon from './RemoveIcon';
import LoadingIcon from './LoadingIcon';
import { validateImage } from '../../utils/ImageValidation';

const FileUploadField = ({
  label,
  name,
  register,
  errors,
  setError,
  validationRules,
  defaultValue,
  placeholder,
  resetField,
  ...inputProps
}) => {

    const [imageFile, setImageFile] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);

    const handleFileChange = async (event) => {
      setIsLoading(true);
      const selectedFile = event.target.files[0];

      if (selectedFile) {

        const result = await validateImage(selectedFile, 3000000); // 3MB
        
        if (!result.valid) {
          setError(`${name}`, { type: 'manual', message: result.message });
          setIsLoading(false);
          return;
        }

        setImageFile(selectedFile);
      }
      setIsLoading(false);
    };
  
      const handleRemoveImage = () => {
        resetField(`${name}`);
        setImageFile(null);
      };


  return (
    <div className={`h-full w-full relative flex justify-center items-center border-2 rounded-sm bg-slate-100  ${errors[name] && 'border-2 border-red-500'}`}>

      { isLoading ? <LoadingIcon /> : null }

      {/* The icon for adding an image */}
      <label htmlFor={name}  className={`h-full w-full flex flex-col p-2 text-center items-center justify-center absolute ${imageFile && 'hidden'} `}>

        <AddIcon color={errors[name] ? 'red' : 'black'} />
        <FormFieldError name={name} errors={errors} />
      
      </label>

      {/* The remove button for an image */}
      {imageFile && 
        <>
          <RemoveIcon color='red' onClick={handleRemoveImage} />
          <img className='w-full' src={URL.createObjectURL(imageFile)} alt='Preview' />
        </> 
      }

      <input
        type='file'
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        accept='image/png, image/gif, image/jpeg'
        {...register(name, validationRules)}
        {...inputProps}
        onInput={handleFileChange}
        className={`opacity-0 absolute w-full h-full ${imageFile && 'hidden'}`}
      />

    </div>
  );
};

export default FileUploadField;
