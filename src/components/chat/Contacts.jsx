import useContacts from './hooks/useContacts';

const Contacts = ({ setChatId, setRecipientId, recipient }) => {
   
    const { 
        populateChats
    } = useContacts(setChatId, setRecipientId);

    return (
        <div className='w-full h-full' >
           {populateChats()}
        </div>
    );
};

export default Contacts;