import { useEffect, useState } from "react";
import React from "react";
import ContactCard from "./ContactCard";
import AddContact from "./AddContact";
import DeleteContact from "./DeleteContact";
import ContactHelper from "./ContactHelper";

export const ContactsContext = React.createContext({
	contacts: [],
	fetchContacts: () => {},
});

export const ContactPage = () => {
	const [contacts, setContacts] = useState([]);
	const fetchContacts = async () => {
		const response = await fetch("http://localhost:8000/contacts");
		const contacts = await response.json();
		setContacts(contacts.data);
	};
	useEffect(() => {
		fetchContacts();
	}, []);

	return (
		<ContactsContext.Provider value={{ contacts, fetchContacts }}>
			<AddContact />
			<div>
				<ContactCard contacts={contacts} fetchContacts={fetchContacts} />
			</div>
		</ContactsContext.Provider>
	);
};
