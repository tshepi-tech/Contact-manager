import {
	Button,
	Modal,
	ModalBody,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalFooter,
	InputGroup,
	Input,
	useDisclosure,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import React from "react";
import { useState } from "react";
import { ContactsContext } from "./ContactPage";

export default function UpdateContact({ name, id, email }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [contact, setContact] = useState(name);
	const [contactE, setContactE] = useState(email);
	const { fetchContacts } = React.useContext(ContactsContext);

	const updateContact = async () => {
		await fetch(`http://localhost:8000/contacts/${id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name: contact, email: contactE }),
		});
		onClose();
		await fetchContacts();
	};

	return (
		<div>
			<Button
				leftIcon={<EditIcon />}
				variant="outline"
				h="1.5rem"
				size="sm"
				onClick={onOpen}
			>
				Update contact
			</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Update {name}</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<InputGroup size="md">
							<Input
								pr="4.5rem"
								type="text"
								value={contact}
								onChange={(event) => setContact(event.target.value)}
							/>
							<Input
								pr="4.5rem"
								type="text"
								value={contactE}
								onChange={(event) => setContactE(event.target.value)}
							/>
						</InputGroup>
					</ModalBody>

					<ModalFooter>
						<Button h="1.5rem" size="sm" onClick={updateContact}>
							Update confirm
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</div>
	);
}
