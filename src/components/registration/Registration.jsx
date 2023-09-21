import React from 'react'

import useRegistration from './hooks/useRegistration'

import Step1Email from './Step1Email'

const Registration = () => {

    const { renderStage } = useRegistration();

  return (
    <div>
        {renderStage()}
    </div>
  )
}

export default Registration