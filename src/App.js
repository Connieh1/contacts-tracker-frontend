import React from 'react';
// import {connect} from 'react-redux';
import ContactsContainer from './containers/ContactsContainer';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <ContactsContainer />
      </div>
    );
  }
}

export default App;
