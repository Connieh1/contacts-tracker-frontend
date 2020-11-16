import React from 'react';
import {connect} from 'react-redux';
import {editContact} from '../actions/editContact'

class ContactEdit extends React.Component {

  state = {
    name: '',
    company: '',
    category: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let contact = {...this.state, id: this.props.contact.id}
    this.props.editContact(contact)
    this.setState({
      name: '',
      company: '',
      category: 'Personal'
    })
  }

  render() {
    return(
      <div>
        <form  onSubmit={this.handleSubmit} >
          <label>Category:</label>
          <select name="category" value={this.state.category} onChange={this.handleChange}>
            <option>Personal</option>
            <option>Client</option>
            <option>Profesional</option>
            <option>Other</option>
          </select>
          <label>Contact Name: </label>
          <input type='text' name='name' placeholder='Name' value={this.state.name} onChange={this.handleChange} /><br/><br/>
          <label>Telephone: </label>
          <input type='text' name='telephone' placeholder='Telephone Number' value={this.state.telephone} onChange={this.handleChange} /><br/><br/>
          <label>Contact Name: </label>
          <input type='email' name='email' placeholder='Email' value={this.state.email} onChange={this.handleChange} /><br/><br/>
          <label>Contact's Company: </label>
          <input type='text' name='company' placeholder='Company' value={this.state.company} onChange={this.handleChange} /><br/><br/>
          {/*}<label>Contact Type: </label>
        <input type='text' name='category' placeholder='Contact Type (eg. Personal, Client, Professional)' value={this.state.type} onChange={this.handleChange} /><br/> */}
          <input type='submit'/>
        </form>
      </div>
    );
  }
}

ContactEdit.defaultProps = {
  contacts: {}
}

export default connect(null, {editContact})(ContactEdit);
