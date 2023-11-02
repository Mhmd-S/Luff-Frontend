import React from 'react'
import { convertDateShort } from '../../utils/Utils'

const MessageContact = ({ message }) => {
  return (
    <div key={message._id} className='max-w-full text-black flex flex-col  items-start p-2'>
        <div className='max-w-full break-words border-[1px] border-slate-900 px-4 py-2 self-start rounded-xl'>
          {message.content}
        </div>
        <div className='text-[0.7rem] text-black'>
          {convertDateShort(message.createdAt)}
        </div>
    </div>
  )
}

export default MessageContact