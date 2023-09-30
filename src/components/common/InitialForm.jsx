import React from 'react'

const InitialForm = ({ children, onSubmit }) => {
  return (
    <form  
        onSubmit={onSubmit}
        className='w-full h-full flex flex-col items-center justify-evenly'
      >
        {children}
    </form>
  )
}

export default InitialForm
