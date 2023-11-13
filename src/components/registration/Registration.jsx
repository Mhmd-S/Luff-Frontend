import React from 'react'

import useRegistration from './hooks/useRegistration'

const Registration = () => {

    const { renderStage } = useRegistration();

  return (
    <div className='w-4/5 h-3/6 md:h-1/2 md:w-1/2 lg:w-1/4 lg:h-3/4 bg-white bg-opacity-90 rounded-xl p-4 flex flex-col items-center relative'> 
      {renderStage()}
    </div>
  )
}

export default Registration