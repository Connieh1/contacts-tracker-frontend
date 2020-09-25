import React from 'react';


const Contact = (props) => {
  console.log(props)

  let contact = props.contacts[props.match.params.id-1]

  return(
    <li>
      {contact ?
      <strong>contact.name</strong> : null} -
      {contact ?
      `Company: contact.company` : null }-
      {contact ?
      `Type: contact.category`  : null }

    </li>
  )
}

export default Contact;
