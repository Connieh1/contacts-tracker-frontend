import React from "react";
import { Route, Link } from "react-router-dom";
import Contact from "./Contact";

const Contacts = (props) => {
  // const { contacts } = this.props;

  return (
    <div>
      {props.contacts.map((contact) => (
        <li className="list-group-item" key={contact.id}>
          <Link to={`/contacts/${contact.id}`}>
            {contact.name} - {contact.company} - {contact.category}
          </Link>
        </li>
      ))}
    </div>

    // <React.Fragment>
    //   <h1 className="display-4 mb-2">
    //     <span className="text-danger">Contact</span> List
    //   </h1>
    //   {contacts.map((contact) => (
    //     <Contact key={contact.id} contact={contact} />
    //   ))}
    // </React.Fragment>
  );
};

export default Contacts;
