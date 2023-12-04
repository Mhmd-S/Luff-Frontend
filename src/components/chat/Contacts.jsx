import useContacts from './hooks/useContacts';

const Contacts = ({ setChatId, setRecipient, recipient }) => {
	const { populateChats } = useContacts(setChatId, setRecipient);

	return (
		<div className="w-full h-full flex flex-col">
			<h3 className="hidden md:block w-fit ml-3 mt-3 border-b-2 border-purple-500 font-bold text-xl">
				Chats
			</h3>
			{populateChats()}
		</div>
	);
};

export default Contacts;
