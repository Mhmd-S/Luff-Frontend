import React from 'react';
import FormFieldError from './FormFieldError';

const FormField = ({
  label,
  name,
  type,
  register,
  errors,
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
      
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        {...register(name, validationRules)}
        {...inputProps}
        className={`block w-full rounded-md p-1.5 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6' ${errors[name] && 'border-2 border-pink-600'}`}
      />

      <FormFieldError name={name} errors={errors} />
    
    </div>
  );
};

export default FormField;
