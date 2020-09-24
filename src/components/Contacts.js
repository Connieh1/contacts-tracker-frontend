import React from 'react';

const Contacts = (props) => {
  return(
    <div>
      {props.contacts.map(contact =>
        <React.Fragment key={contact.id}>
          <h2>{contact.name}</h2>
          <h3>Type: {contact.category}</h3>
          <h3>Company: {contact.company}</h3>
        </React.Fragment>)}
    </div>
  );
}

export default Contacts;
