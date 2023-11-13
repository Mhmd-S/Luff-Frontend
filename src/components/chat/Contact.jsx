import React from 'react'
import { convertDateLong } from '../../utils/Utils';
import useContact from './hooks/useContact';

const Contact = ({ chat, contactInfo, setChatId, setRecipient }) => {

    const {
        user
    } = useContact();

  return (
    <div
        className='w-full h-20 px-2 grid grid-cols-[20%_80%] items-center border-b border-[#e4e6e8] cursor-pointer hover:bg-[#f5f5f5]'
        onClick={() => {
            setRecipient(contactInfo);
            setChatId(chat._id);
        }}
        >
        
        {/* Profile Pic */}
        <img
            src={contactInfo.profilePictures[0]}
            alt='Profile'
            className='w-12 h-12 rounded-full'
        />
        

        <div className='w-full h-full flex flex-col justify-center'>
            {/* Name and Date */}
            <div className='w-full flex justify-between'>
                <p className='text-lg font-bold overflow-hidden truncate'>
                    {contactInfo.name}
                </p>
                <p className='text-[0.85rem] md:text-[0.7rem]'>
                    {chat.lastMessage && convertDateLong(chat.lastMessage.updatedAt)}
                </p>
            </div>
            
            {/* Last Message */}
            <div className='w-full text-[#71768b] flex justify-between overflow-hidden truncate md:text-sm'>
                <p className='overflow-hidden truncate w-[90%]'>
                    {chat.lastMessage ? chat.lastMessage.content : `You have been matched with ${contactInfo.name}` }
                </p>
                {!chat.lastMessage?.seenBy.includes(user._id) && <span className='w-4 h-4 rounded-full inline-block bg-sky-500 animate-pulse'></span>}
            </div>    
            
        </div>

    </div>
  )
}

export default Contact