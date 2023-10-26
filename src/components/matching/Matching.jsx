import React from 'react'
import useMatching from './hooks/useMatching'
import LoadingIcon from '../icons/LoadingIcon';

const Matching = () => {
  
    const { renderUser, loading } = useMatching();

    return (
    <div className='w-full h-full flex justify-center items-center'>
        { loading ? <LoadingIcon /> : renderUser() }
    </div>
  )
}

export default Matching