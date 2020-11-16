import React from 'react';
import {Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Contact from './Contact';
import {deleteContact} from '../actions/deleteContact';
import { editContact } from '../actions/editContact';

const Contacts = (props) => {
  console.log(props)

  const handleDelete = (contact) => {
    props.deleteContact(contact.id)
  }

  const handleEdit = (contact) => {
    props.editContact(contact.id)
  }

  return (
    <div>
      {props.contacts.map(contact =>
        <li className="list-group-item" key={contact.id}>
          <Link to={`/contacts/${contact.id}`}>{contact.name} - {contact.company} - {contact.category} <button onClick={() => handleEdit(contact)}>Edit</button>{" "}<button onClick={() => handleDelete(contact)}>Delete</button><br/></Link>
        </li>
      )}
    </div>

  );
}


export default connect(null, {deleteContact, editContact})(Contacts);
