import React from 'react'
import { convertDateShort } from '../../utils/Utils'

const MessageUser = ({ message }) => {
  return (
    <div key={message._id} className='max-w-[90%] text-white flex flex-col items-end ml-[15%] p-2'>
        <div className='max-w-full break-words bg-slate-900 p-4 self-end rounded-xl'>
          {message.content}
        </div>
        <div className='text-[0.7rem] text-black'>
          {convertDateShort(message.createdAt)}
        </div>
    </div>
  )
}

export default MessageUser