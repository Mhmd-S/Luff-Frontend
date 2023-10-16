import React from 'react'

import useRegistration from './hooks/useRegistration'

const Registration = () => {

    const { renderStage } = useRegistration();

  return (
    <div className='w-full h-4/6 md:h-5/6 md:w-1/4 bg-white bg-opacity-90 rounded-xl p-4 flex flex-col items-center shadow-lg relative'> 
      {renderStage()}
    </div>
  )
}

export default Registration