
const Contact = ({ contact, onDelete }) => {
	return (
		<div className="contact">
			<p>Name: {contact.name}</p>
			<p>Number: {contact.number}</p>
			<button className="delete-btn" onClick={() => onDelete(contact.id)}>Delete</button>
		</div>
	)
}

export default Contact