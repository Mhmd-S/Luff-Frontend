import React from 'react'

const CardBio = ({ bio }) => {
  return (
    <div className='absolute w-full h-full top-0'>
        <p>
            {bio}
        </p>
    </div>
  )
}

export default CardBio