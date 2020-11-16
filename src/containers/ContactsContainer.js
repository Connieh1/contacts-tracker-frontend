import React from 'react';
import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {fetchContacts} from '../actions/fetchContacts';
import Contacts from '../components/Contacts';
import Contact from '../components/Contact';
import ContactForm from '../components/ContactForm';
import NavBar from '../components/NavBar';
import ContactsCards from '../components/ContactsCards'


class ContactsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchContacts()
  }

  render() {
    return(
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/contacts/new' component={ContactForm}/>
          <Route exact path='/contacts/:id' render={(routerProps) => <Contact {...routerProps} contacts={this.props.contacts} />} />
          <Route exact path='/contacts' render={(routerProps) => <Contacts {...routerProps} contacts={this.props.contacts} />} />
        </Switch>
        <Route exact path='/' component={ContactsCards}/>
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
