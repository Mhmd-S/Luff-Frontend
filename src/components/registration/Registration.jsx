import React from 'react'

import useRegistration from './hooks/useRegistration'

const Registration = () => {

    const { renderStage } = useRegistration();

  return (
    <div className='w-full h-full rounded-xl flex flex-col items-center justify-center p-4 bg-[#fafafa]'>
      {renderStage()}
    </div>
  )
}

export default Registration