import React from 'react'

const Input = ({ type, name, value, placeholder, onChange }) => {
  return (
    <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
    />
  )
}

export default Input