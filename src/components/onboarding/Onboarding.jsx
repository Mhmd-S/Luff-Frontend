import React from 'react'
import useOnboarding from './hooks/useOnboarding'

const Onboarding = () => {

  const { renderStep } = useOnboarding()

  return (
    <div  className='w-full h-full p-4 flex justify-center items-center'>
      {renderStep()}
    </div>
  )
}

export default Onboarding