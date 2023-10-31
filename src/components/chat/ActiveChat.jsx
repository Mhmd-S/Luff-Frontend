import React from 'react'
import MesageArrow from '../icons/MesageArrow';
import useActiveChat from './hooks/useActiveChat';
import LoadingIcon from '../icons/LoadingIcon';
import BackIcon from '../icons/BackIcon';
import useChatActive from './hooks/useActiveChat';

const ChatWindow = ({ setRecipient, setChatId, chatId, recipient }) => {
  
  const {
    messageInput,
    setMessageInput,
    sendMessage,
    populateMessages,
    isLoading,
    error,
    containerRef,
    bottomRef,
  } = useActiveChat(chatId, recipient);

  return (
      <div className='w-full h-full grid grid-rows-[10%_80%_10%] grid-cols-1'>

        <div className='w-full  bg-[#60698459] flex items-center'>

          <button className='w-fit h-full p-3 flex items-center group md:hidden' onClick={ ()=> { setRecipient(null); setChatId(null) } }>
            <BackIcon />
            <div>
              <p>{recipient.name}</p>
              <img src={recipient.profilePictures[0]} alt='profileImage' className='w-10 h-10 rounded-full'/>
            </div>
          </button>
          
        </div>
        
        {isLoading ? 
        <div className='w-full h-full flex justify-center items-center'><LoadingIcon size={12} /></div> 
        :
        <ul className=' bg-[#282c37] p-2 text-sm w-full h-full flex flex-col items-center overflow-y-scroll scrollbar:bg-blue-500 rounded-xl scrollbar scrollbar-thumb-blue-500 scrollbar-track-gray-200'>
            <li ref={containerRef}></li>
            {error ? error : populateMessages()}
            <li ref={bottomRef}></li>
        </ul>
        }

        <div className='w-full h-full  bg-[#60698459] flex justify-evenly items-center px-2' method='#' onSubmit={(e)=>e.preventDefault()}>
          <textarea type="text" placeholder='Type your message' value={messageInput} onChange={(e) => setMessageInput(e.target.value)} className='h-4/5 bg-[#282c37] rounded-xl resize-none w-[85%] outline-none p-2 text-sm overflow-y-auto'/>
          <button onClick={sendMessage} className='w-[10%]'>
            <MesageArrow />
          </button>
        </div>

      </div> 
  )
}

export default ChatWindow