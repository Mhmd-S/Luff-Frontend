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
  placeholder
}) => {
  return (
    <div className='w-full flex flex-col p-2'>
      
      <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        {...register(name, validationRules)}
        className={`block w-full rounded-md p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6' ${errors[name] && 'border-2 border-red-500'}`}
      />

      <FormFieldError name={name} errors={errors} />
    
    </div>
  );
};

export default FormField;
