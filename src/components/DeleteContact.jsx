import React from "react";
import { ContactsContext } from "./ContactPage";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

export default function DeleteContact({ id }) {
	const { fetchContacts } = React.useContext(ContactsContext);

	const deleteContact = async () => {
		await fetch(`http://localhost:8000/contacts/${id}`, {
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
			body: { id: id },
		});
		await fetchContacts();
	};

	return (
		<Button
			leftIcon={<DeleteIcon />}
			variant="outline"
			h="1.5rem"
			size="sm"
			onClick={deleteContact}
		>
			Delete Contact
		</Button>
	);
}
