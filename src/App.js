import React from 'react';
import { connect } from 'react-redux';
import fetchContacts from './actions/fetchContacts';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchContacts()
}



  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
}




export default connect(null, {fetchContacts}) (App);
