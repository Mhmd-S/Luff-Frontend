import useContacts from './hooks/useContacts';

const Contacts = ({ setChatId, setRecipient, recipient }) => {
   
    const { 
        populateChats
    } = useContacts(setChatId, setRecipient);

    return (
        <div className='w-full h-full md:w-1/3 md:border-[1px] md:shadow-lg md:rounded-md' >
           {populateChats()}
        </div>
    );
};

export default Contacts;