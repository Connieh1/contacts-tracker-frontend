import React from 'react';
import {connect} from 'react-redux';
import {addContact} from '../actions/addContact'

class ContactForm extends React.Component {
  state = {name: '', company: '', category: ''}

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addContact(this.state)
  }

  render() {
    return(
      <div>
        <form  onSubmit={this.handleSubmit} >
          <label>Contact Name: </label>
          <input type='text' name='name' placeholder='Name' value={this.state.name} onChange={this.handleChange} /><br/><br/>
          <label>Contact's Company: </label>
          <input type='text' name='company' placeholder='Company' value={this.state.company} onChange={this.handleChange} /><br/><br/>
          <label>Contact Type: </label>
          <input type='text' name='category' placeholder='Contact Type (eg. Personal, Client, Professional)' value={this.state.type} onChange={this.handleChange} /><br/>
          <input type='submit'/>
        </form>
      </div>
    );
  }

}

export default connect(null, {addContact})(ContactForm);
