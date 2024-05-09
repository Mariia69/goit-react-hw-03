import Contact from '../Contact/Contact'

import css from './ContactList.module.css'

const ContactList = ({ contacts, onDelete }) => {
	return (
		<ul>
			{contacts.map(contact => (
				<li key={contact.id}>
          <Contact
            key={contact.id}
						contact={contact}
						onDelete={onDelete}
					/>
				</li>
			))}
		</ul>
	)
}

export default ContactList
