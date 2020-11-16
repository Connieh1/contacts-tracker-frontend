import React from 'react';
import {Redirect} from 'react-router-dom';
import InteractionsContainer from '../containers/InteractionsContainer';
import ContactEdit from './ContactEdit';

const Contact = (props) => {
  // console.log(props)

  // let contact = props.contacts[props.match.params.id - 1]
  let contact = props.contacts.filter(contact => contact.id == props.match.params.id)[0]

  return(
    <div>
      <h2>
        {contact ?
        <strong>{contact.name}</strong> : null} - {contact ? contact.company : null} - {contact ? contact.category :null}
        {/* <p>{contact.telephone}</p>
      <p>{contact.email}</p> */}
      </h2>
      <InteractionsContainer contact={contact} />
      <h4> Edit Contact </h4>
      <ContactEdit contact={contact} />
    </div>
  )
}

export default Contact;
