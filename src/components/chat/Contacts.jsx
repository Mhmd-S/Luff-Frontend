import useContacts from './hooks/useContacts';

const Contacts = ({ setChatId, setRecipient, recipient }) => {
   
    const { 
        populateChats
    } = useContacts(setChatId, setRecipient);

    return (
        <div className='w-full h-full' >
           {populateChats()}
        </div>
    );
};

export default Contacts;