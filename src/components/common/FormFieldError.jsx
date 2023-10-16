import React from 'react'

const FormErrorMessage = ({ errors, name }) => {

    const errorMessage = errors[name]?.message;

    return (
      <div className='w-full w-full'>
          {errorMessage && <p className='w-full text-pink-600'>{errorMessage}</p>}
      </div>
    )
}

export default FormErrorMessage