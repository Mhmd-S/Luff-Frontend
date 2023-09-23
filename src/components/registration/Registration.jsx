import React from 'react'

import useRegistration from './hooks/useRegistration'



const Registration = () => {

    const { renderStage } = useRegistration();

  return (
    <div>
        {renderStage()}
    </div>
  )
}

export default Registration