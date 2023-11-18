import React from 'react'

import useRegistration from './hooks/useRegistration'

const Registration = () => {

    const { renderStage } = useRegistration();

  return (
    <div className='w-full h-full rounded-xl flex flex-col items-center justify-evenly p-4 bg-[#fafafa]'>
        <p className='text-purple-500 text-5xl font-bold md:text-6xl'>
          Luff
        </p>
      {renderStage()}
    </div>
  )
}

export default Registration