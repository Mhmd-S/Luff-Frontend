import React from 'react'
import useOnboarding from './hooks/useOnboarding'
import LoadingIcon from '../icons/LoadingIcon'

const Onboarding = () => {

  const { renderStep, loading } = useOnboarding()

  return (
    <div  className='w-full h-full p-4 flex justify-center items-center'>
      { loading ?
        <LoadingIcon />
        : 
        renderStep()
        }
    </div>
  )
}

export default Onboarding