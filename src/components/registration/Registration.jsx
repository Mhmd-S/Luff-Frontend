import React from 'react'

import useRegistration from './hooks/useRegistration'

const Registration = () => {

    const { renderStage } = useRegistration();

  return (
    <div className='w-3/4 h-3/6 md:h-5/6 md:w-1/4 bg-white rounded-xl p-4 flex flex-col items-center shadow-lg relative'> 
      {renderStage()}
    </div>
  )
}

export default Registration