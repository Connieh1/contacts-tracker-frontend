import React from "react";
import { Redirect } from "react-router-dom";
import InteractionsContainer from "../containers/InteractionsContainer";
import ContactEdit from "./ContactEdit";

const Contact = (props) => {
  // console.log(props)

  // let contact = props.contacts[props.match.params.id - 1]
  let contact = props.contacts.filter(
    (contact) => contact.id == props.match.params.id
  )[0];

  return (
    <div>
      <h2>
        {contact ? <strong>{contact.name}</strong> : null} -{" "}
        {contact ? contact.category : null} Contact
        <p style={{ fontSize: "20px" }}>
          Company: {contact ? contact.company : null}
        </p>
        <p style={{ fontSize: "20px" }}>
          Telephone: {contact ? contact.telephone : null}
        </p>
        <p style={{ fontSize: "20px" }}>
          Email: {contact ? contact.email : null}
        </p>
      </h2>
      <hr />
      <p>
        <strong>Interaction Details:</strong>
      </p>
      <InteractionsContainer contact={contact} />
      <h4> Edit Contact </h4>
      <ContactEdit contact={contact} />
    </div>
  );
};

export default Contact;
