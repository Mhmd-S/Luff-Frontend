import React from 'react'

const FormButton = ({ onClick, text}) => {
  return (
    <button onClick={onClick} className='w-fit p-4 bg-slate-900 text-white rounded-lg'>
        {text}
    </button>
  )
}

export default FormButton