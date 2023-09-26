import React from 'react'

const FormGeneralError = ({ message }) => {
  return (
    <div className='text-red-500 text-center'>
        {message}
    </div>
  )
}

export default FormGeneralError