import React from 'react'
import MesageArrow from '../icons/MesageArrow';
import useMessageField from './hooks/useMessageField';

const MessageField = ({ chatId, recipient, setMessages }) => {

    const { 
            messageInput, 
            sendMessage, 
            enterPressed, 
            setMessageInput 
    } = useMessageField({ chatId, recipient, setMessages });

    return (
      <div className='w-full h-full bg-white border-t-[1px] border-slate-900 z-20 flex justify-evenly items-center px-2 self md:rounded-b-md'>
        
          <textarea  
            placeholder='Type your message' 
            value={messageInput} 
            onChange={(e) => setMessageInput(e.target.value)} 
            onKeyDown={enterPressed} 
            className='rounded-xl resize-none w-[85%] outline-none border-[1px] border-black p-2 text-sm overflow-y-auto'/>
          
          <button onClick={sendMessage} className='w-[10%]'>
            <MesageArrow />
          </button>

      </div>
    )
}

export default MessageField