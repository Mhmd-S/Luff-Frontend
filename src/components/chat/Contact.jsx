import React from 'react'

const Contact = ({ chat, contactInfo, setChatId, setRecipient }) => {

    const convertDate = (date) => {
        const dateObj = new Date(date);
        const now = new Date(); // Get the current date and time
    
        let dateStr;
        let timeStr;
    
        // Check if the date is today, then display the time
        if (
            dateObj.getDate() === now.getDate() &&
            dateObj.getMonth() === now.getMonth() &&
            dateObj.getFullYear() === now.getFullYear()
        ) {
            dateStr = '';
            timeStr = dateObj.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
            });
        } else if (Math.abs(now - dateObj) < 7 * 24 * 60 * 60 * 1000) {
            // Check if the date is within the last 7 days (604800000 milliseconds)
            dateStr = dateObj.toLocaleDateString('en-US', { weekday: 'short' });
            timeStr = '';
        } else {
            dateStr = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
            timeStr = '';
        }
    
        return `${dateStr} ${timeStr}`.trim();
    };

  return (
    <div
        className='w-full h-20 flex items-center border-b border-[#e4e6e8] cursor-pointer hover:bg-[#f5f5f5]'
        onClick={() => {
            setRecipient(contactInfo);
            setChatId(chat._id);
        }}>
        <div className='h-full flex justify-center items-start pt-4'>
            {contactInfo.profilePictures[0] ? (
            <img
                src={contactInfo.profilePictures[0]}
                alt='Profile'
                className='w-10 h-10 rounded-full'
            />
            ) : (
            <img src='' alt='profileImage'/>
            )}
        </div>
        <div className='h-full  grid grid-rows-[40%_60%] pt-2 px-1'>
            <div className='overflow-hidden truncate'>{contactInfo.name}</div>
            <div className='text-[#71768b] w-full overflow-hidden md:text-sm'>
                {chat.lastMessage && chat.lastMessage.content }
            </div>
            
        </div>
        <div className='text-[0.85rem] h-full pt-2 md:text-[0.7rem]'>
            {chat.lastMessage && convertDate(chat.lastMessage.updatedAt)}
        </div>
    </div>
  )
}

export default Contact