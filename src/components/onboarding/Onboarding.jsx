import React from 'react'
import useOnboarding from './hooks/useOnboarding'

const Onboarding = () => {

  const { renderStep } = useOnboarding()

  return (
    <div>
      {renderStep()}
    </div>
  )
}

export default Onboarding