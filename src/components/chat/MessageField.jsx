import React from 'react'
import MesageArrow from '../icons/MesageArrow';
import useMessageField from './hooks/useMessageField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const MessageField = ({ chatId, recipient }) => {

    const { 
            messageInput, 
            sendMessage, 
            enterPressed, 
            setMessageInput 
    } = useMessageField({ chatId, recipient });

    return (
      <div className='w-full h-full bg-[#fafafc] z-20 flex justify-evenly items-center px-3 self md:rounded-b-md'>
        
          <textarea  
            placeholder='Type your message' 
            value={messageInput} 
            onChange={(e) => setMessageInput(e.target.value)} 
            onKeyDown={enterPressed} 
            className='rounded-xl resize-none w-[85%] outline-none border-[1px] border-purple-600 p-3 text-sm overflow-y-auto'/>
          
          <button onClick={sendMessage} className='w-[10%]'>
            <FontAwesomeIcon
              icon={faPaperPlane}
              className='text-2xl text-purple-600'
              />
          </button>

      </div>
    )
}

export default MessageField