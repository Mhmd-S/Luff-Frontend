import React from 'react'

const Input = ({ type, name, value, placeholder, onChange, register, validationRules, errors }) => {
  return (
    <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder} 
        className={'block w-full rounded-md border-2 border-transparent placeholder:text-gray-400 focus:border-sky-500 sm:text-sm sm:leading-6' + errors[name] && 'border-red-500'}
        {...register(name, validationRules)}
    />
  )
}

export default Input