import React from 'react';
import RadioButton from './RadioButton';
import FormFieldError from './FormFieldError';

const RadioGroup = ({ name, options, register, errors }) => (
  <fieldset className='w-full flex flex-col p-2'>
    <legend className="block text-sm font-medium leading-6 text-gray-900">Gender:</legend>
    <div className='w-full h-full flex justify-evenly'>
      {options.map((option) => (
        <RadioButton
          key={option.value}
          id={`genderChoice${option.value}`}
          name={name}
          value={option.value}
          label={option.label}
          register={register}
        />
      ))}
    </div>
    <FormFieldError name={name} errors={errors} />
  </fieldset>
);

export default RadioGroup;
