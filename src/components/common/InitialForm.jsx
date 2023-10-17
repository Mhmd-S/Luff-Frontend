import React from 'react'
import LoadingIcon from '../icons/LoadingIcon'

const InitialForm = ({ children, onSubmit, loading }) => {
  return (
    <>
      {loading ?
        <div className='w-full h-full flex flex-col items-center justify-evenly'>
         <LoadingIcon /> 
        </div>
         : 
        <form  
            onSubmit={onSubmit}
            className='w-full h-full flex flex-col items-center justify-evenly'
          >
            {children}
        </form>
      }
    </>
  )
}

export default InitialForm
