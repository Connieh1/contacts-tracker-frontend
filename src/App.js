import React from 'react';
import {connect} from 'react-redux';
import {fetchContacts} from './actions/fetchContacts'
import ContactsContainer from './containers/ContactsContainer';
import Contacts from './components/Contacts'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <ContactsContainer />
      </div>
    );
  }
}



export default connect(null, {fetchContacts})(App);
