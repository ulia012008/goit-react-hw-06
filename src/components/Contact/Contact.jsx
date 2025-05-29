// import css from "./Contact.module.css";

export default function Contact({ contact, onDelete }) {
  return (
    <li>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </li>
  );
}
