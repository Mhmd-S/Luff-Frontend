import React, { useState } from 'react';
import FormFieldError from './FormFieldError';


//Continue here
const FileUploadField = ({
  label,
  name,
  register,
  errors,
  validationRules,
  defaultValue,
  placeholder,
  resetField,
  ...inputProps
}) => {

    const [imageFile, setImageFile] = useState(null);

    const handleFileChange = (event) => {
        setImageFile(event.target.files[0]);
      }
  
      const handleRemoveImage = () => {
        resetField(`${name}`);
        setImageFile(null);
      };


  return (
    <div className={`h-full w-full relative flex justify-center items-center border-2 rounded-sm bg-slate-100  ${errors[name] && 'border-2 border-red-500'}`}>
      
      <label htmlFor={name}  className={`h-full w-full flex items-center justify-center absolute ${imageFile && 'hidden'} `}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={errors[name] ? 'red' : 'black'} className="w-6 h-6">
            <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
        </svg>
      </label>

      {imageFile &&
      <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='black' className="w-6 h-6 right-[-5%] top-[-5%] absolute cursor-pointer" onClick={handleRemoveImage}>
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
        </svg>
        <img className='w-full' src={URL.createObjectURL(imageFile)} alt='Preview' />
      </> 
      }

      <input
        type='file'
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        {...register(name, validationRules)}
        {...inputProps}
        onInput={handleFileChange}
        className={`opacity-0 absolute w-full h-full ${imageFile && 'hidden'} `}
      />
      
    </div>
  );
};

export default FileUploadField;
