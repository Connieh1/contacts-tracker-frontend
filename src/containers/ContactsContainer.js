import React from 'react';
import { connect } from 'react-redux';

import {fetchContacts} from '../actions/fetchContacts';
import Contacts from '../components/Contacts';
import ContactForm from '../components/ContactForm';


class ContactsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchContacts()
  }

  render() {
    return(
      <div>
        <ContactForm />
        <Contacts contacts={this.props.contacts}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts
  }
}

export default connect(mapStateToProps, {fetchContacts})(ContactsContainer);
