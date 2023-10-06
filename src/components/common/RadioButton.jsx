import React from 'react';

const RadioButton = ({ id, name, value, label, register, validationRules }) => (
  <label htmlFor={id} className='flex items-center justify-center'>
    <input
      type='radio'
      id={id}
      name={name}
      value={value}
      {...register(name, {required: 'Gender is required'})}
      className="`after:content[''] relative h-5 w-5 cursor-pointer appearance-none rounded-full border-4 border-blue-gray-200 text-black transition-all after:absolute after:top-2/4 after:left-2/4 after:block after:h-3/4 after:w-3/4 after:-translate-y-2/4 after:-translate-x-2/4 after:rounded-full after:opacity-0 after:bg-black checked:border-black checked:after:opacity-100"
    />
    <h3 className='pl-2'>{label}</h3>
  </label>
);

export default RadioButton;
