import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"
import { nanoid } from 'nanoid'


export default function ContactsList({data, onDelete}) {
    const contacts = data.map((contact) => {
        return <li key={nanoid()} className={css.contactItem}><Contact contact={contact} onDelete={onDelete}></Contact></li>
    })
    return <ul>{contacts }</ul>}