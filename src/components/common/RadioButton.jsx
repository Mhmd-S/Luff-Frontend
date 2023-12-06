import React, { useState } from 'react';


const RadioButton = ({ id, name, value, label, register, validationRules, isChecked }) => {
  return (
    <label htmlFor={id} className='flex items-center justify-center'>
      <input
        type='radio'
        id={id}
        name={name}
        value={value}
        defaultChecked={isChecked}
        {...register(name, validationRules)}
        className="after:content[''] relative h-5 w-5 cursor-pointer appearance-none rounded-full border-4 border-blue-gray-200 text-black transition-all after:absolute after:top-2/4 after:left-2/4 after:block after:h-full after:w-full after:-translate-y-2/4 after:-translate-x-2/4 after:rounded-full after:opacity-0 after:bg-purple-600  checked:after:opacity-100"
        />
         <h3 className='pl-2'>{label}</h3>
      </label>
    );
}

export default RadioButton;
