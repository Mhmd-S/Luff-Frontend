import React from 'react';
import FormFieldError from './FormFieldError';

const FormFieldTextArea = ({
  errors,
  label,
  name,
  register,
  validationRules,
  defaultValue,
  placeholder,
  ...inputProps
}) => {
  return (
    <div className='w-full flex flex-col'>
      
      <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      
      <textarea
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        {...register(name, validationRules)}
        {...inputProps}
        className={`block w-full h-24 resize-none rounded-md p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6' ${errors[name] && 'border-2 border-pink-600'}`}
      />

      <FormFieldError name={name} errors={errors} />
    
    </div>
  );
};

export default FormFieldTextArea;
