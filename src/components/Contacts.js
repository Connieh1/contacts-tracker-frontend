import React from 'react';
import {Route, Link} from 'react-router-dom';
import Contact from './Contact';


const Contacts = (props) => {
  return (
    <div>
      {props.contacts.map(contact =>
        <li key={contact.id}>
          <Link to={`/contacts/${contact.id}`}>{contact.name} - {contact.company} - {contact.category}</Link>
        </li> )}
    </div>

  );
}

export default Contacts;
