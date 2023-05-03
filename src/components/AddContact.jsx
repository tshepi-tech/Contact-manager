import React from "react";
import {
	Button,
	Modal,
	ModalBody,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	useDisclosure,
} from "@chakra-ui/react";

export default function AddContact() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const { contacts, fetchContacts } = React.useContext;

	const handleName = (event) => {
		setName(event.target.value);
	};
	const handleEmail = (event) => {
		setEmail(event.target.value);
	};

	const handleSubmit = (event) => {
		//event.preventDefault();
		const newContact = {
			id: "id",
			name: name,
			email: email,
		};
		fetch("http://localhost:8000/contacts", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newContact),
		}).then(fetchContacts);
	};

	return (
		<div>
			<Button variant="outline" h="1.5rem" size="sm" onClick={onOpen}>
				Add Contact
			</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Add Contact</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<form onSubmit={handleSubmit}>
							<input
								variant="filled"
								type="text"
								required
								placeholder="Name"
								onChange={handleName}
							></input>
							<input
								variant="filled"
								type="email"
								required
								placeholder="Email"
								onChange={handleEmail}
							></input>
							<button type="submit">Submit</button>
						</form>
					</ModalBody>
				</ModalContent>
			</Modal>
		</div>
	);
}
