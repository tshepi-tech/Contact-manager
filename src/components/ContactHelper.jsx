import React from "react";
import DeleteContact from "./DeleteContact";
import UpdateContact from "./UpdateContact";

export default function ContactHelper({ id, name, fetchContacts, email }) {
	return (
		<div>
			<DeleteContact id={id} />
			<UpdateContact
				id={id}
				name={name}
				fetchContacts={fetchContacts}
				email={email}
			/>
		</div>
	);
}
