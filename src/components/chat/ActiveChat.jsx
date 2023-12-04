import React from 'react'
import useActiveChat from './hooks/useActiveChat';
import LoadingIcon from '../icons/LoadingIcon';
import BackIcon from '../icons/BackIcon';
import useChatActive from './hooks/useActiveChat';
import MessageField from './MessageField';

const ChatWindow = ({ setRecipient, setChatId, chatId, recipient }) => {
  
  const {
    populateMessages,
    setMessages,
    loading,
    error,
    topRef,
    bottomRef,
    chatWindowRef
  } = useActiveChat(chatId, recipient);

  return (
      <div className='relative w-full bg-purple-600 h-full grid grid-rows-[10%_77%_13%] grid-cols-1 md:border-slate-900 md:rounded-md md:w-2/5'>

        <div className='w-full h-full flex items-center py-6 text-white'>

          <button className='w-fit h-full p-3  flex flex-row items-center' onClick={ ()=> { setRecipient(null); setChatId(null) } }>
            <BackIcon />
          </button>

          <div className='flex items-center'>
            <img src={recipient.profilePictures[0]} alt='profileImage' className='w-10 h-10 ml-4 rounded-full'/>
            <p className='p-4'>{recipient.name}</p>
          </div>
          
        </div>

        <ul className='w-full h-full bg-white p-2 text-sm overflow-y-scroll scrollbar:bg-blue-500 rounded-t-xl scrollbar scrollbar-thumb-blue-500 scrollbar-track-gray-200' ref={chatWindowRef}>
          <li ref={topRef}></li>
          {error && <li className='w-full p-2 flex items-center justify-center'>{error}</li>}
          {populateMessages()}
          {loading && <li className='w-full p-2 flex items-center justify-center'><LoadingIcon /></li>}
          <li ref={bottomRef}></li>
        </ul>

        {/* Text box to write message */}
        <MessageField chatId={chatId} recipient={recipient} setMessages={setMessages} />

      </div> 
  )
}

export default ChatWindow