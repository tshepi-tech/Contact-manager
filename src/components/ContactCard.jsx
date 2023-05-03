import React from "react";
import ContactHelper from "./ContactHelper";

export default function ContactCard({ contacts, fetchContacts }) {
	const ListContacts = contacts.map((contact) => (
		<div key={contact.id}>
			<div class="card">
				<div class="container">
					<h4>{contact.name}</h4>
					<p>{contact.email}</p>

					<ContactHelper
						id={contact.id}
						fetchContacts={fetchContacts}
						name={contact.name}
						email={contact.email}
					/>
				</div>
			</div>
		</div>
	));

	return <div>{ListContacts}</div>;
}
