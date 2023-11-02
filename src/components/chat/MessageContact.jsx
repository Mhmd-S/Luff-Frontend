import React from 'react'
import { convertDateShort } from '../../utils/Utils'

const MessageContact = ({ message }) => {
  return (
    <div key={message._id} className='max-w-full text-white flex flex-col items-end'>
        <div className='max-w-full break-words border-[1px] border-slate-900 my-1 px-4 py-1 self-end rounded-3xl'>
          {message.content}
        </div>
        <div className='text-[0.7rem] text-black'>
          {convertDateShort(message.createdAt)}
        </div>
    </div>
  )
}

export default MessageContact