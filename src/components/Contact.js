import React from 'react';
import {Redirect} from 'react-router-dom';
import InteractionsContainer from '../containers/InteractionsContainer';


const Contact = (props) => {
  // console.log(props)

  // let contact = props.contacts[props.match.params.id - 1]
  let contact = props.contacts.filter(contact => contact.id == props.match.params.id)[0]

  return(
    <div>
      <h2>
        {contact ?
        <strong>{contact.name}</strong> : null} - {contact ? contact.company : null} - {contact ? contact.category :null}
      </h2>
      <InteractionsContainer contact={contact} />
    </div>
  )
}

export default Contact;
