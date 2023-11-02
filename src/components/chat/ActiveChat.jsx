import React from 'react'
import MesageArrow from '../icons/MesageArrow';
import useActiveChat from './hooks/useActiveChat';
import LoadingIcon from '../icons/LoadingIcon';
import BackIcon from '../icons/BackIcon';
import useChatActive from './hooks/useActiveChat';

const ChatWindow = ({ setRecipient, setChatId, chatId, recipient }) => {
  
  const {
    setMessageInput,
    sendMessage,
    populateMessages,
    enterPressed,
    messageInput,
    isLoading,
    error,
    containerRef,
    bottomRef,
  } = useActiveChat(chatId, recipient);

  return (
      <div className='relative w-full bg-slate-900 h-full grid grid-rows-[10%_77%_13%] grid-cols-1 md:w-1/3 md:shadow-lg md:border-slate-900 md:rounded-md'>

        <div className='w-full h-full flex items-center py-6 text-white'>

          <button className='w-fit h-full p-3  flex flex-row items-center' onClick={ ()=> { setRecipient(null); setChatId(null) } }>
            <BackIcon />
          </button>

          <div className='flex items-center'>
            <img src={recipient.profilePictures[0]} alt='profileImage' className='w-10 h-10 ml-4 rounded-full'/>
            <p className='p-4'>{recipient.name}</p>
          </div>
          
        </div>
        
        {isLoading ? 
        <div className='w-full h-full flex justify-center items-center'><LoadingIcon size={12} /></div> 
        :
        <ul className=' bg-white p-2 text-sm w-full overflow-y-scroll scrollbar:bg-blue-500 rounded-t-xl scrollbar scrollbar-thumb-blue-500 scrollbar-track-gray-200'>
            <li ref={containerRef}></li>
            {error ? error : populateMessages()}
            <li ref={bottomRef}></li>
        </ul>
        }


        {/* Text box to write message */}
        <div className='w-full h-full bg-white border-t-[1px] border-slate-900 z-20 flex justify-evenly items-center px-2 self md:rounded-b-md'>
          <textarea type="text" placeholder='Type your message' value={messageInput} onChange={(e) => setMessageInput(e.target.value)} onKeyDown={enterPressed} className='rounded-xl resize-none w-[85%] outline-none border-[1px] border-black p-2 text-sm overflow-y-auto'/>
          <button onClick={sendMessage} className='w-[10%]'>
            <MesageArrow />
          </button>
        </div>

      </div> 
  )
}

export default ChatWindow