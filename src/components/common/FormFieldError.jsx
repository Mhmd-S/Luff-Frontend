import React from 'react'

const FormErrorMessage = ({ errors, name }) => {

    const errorMessage = errors[name]?.message;

    return (
      <span className='w-full'>
          {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
      </span>
    )
}

export default FormErrorMessage