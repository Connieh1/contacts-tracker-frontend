import React from 'react';
import {Route} from 'react-router-dom';
import Contact from './Contact';


const Contacts = (props) => {
  return(
    <div>
      {props.contacts.map(contact =>
        <React.Fragment key={contact.id}>
          <Contact contact={contact}/>
        </React.Fragment>)}
        <Route path='./contacts/:id' render={() => <Contact contact={props.contact}/>}/>
    </div>
  );
}

export default Contacts;
