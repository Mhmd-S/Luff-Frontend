import React from 'react'

const FormErrorMessage = ({ errors, name }) => {

    const errorMessage = errors[name]?.message;

    return (
      <div>
          {errorMessage && <p>{errorMessage}</p>}
      </div>
    )
}

export default FormErrorMessage