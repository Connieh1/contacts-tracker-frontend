import React from 'react';
import {connect} from 'react-redux';
import {addInteraction} from '../actions/addInteraction';


class InteractionForm extends React.Component {
  state = {
    date: '',
    description: '',
    notes: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addInteraction(this.state, this.props.contact.id)
    this.setState({
      date: '',
      description: '',
      notes: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Date:</label>
          <input type="datetime" placeholder="Date" name="date" value={this.state.date} onChange={this.handleChange}/>
          <label>Description: </label>
          <input type="textArea" placeholder="What was discussed?" name="description" value={this.state.description} onChange={this.handleChange}/>
          <label>Notes: </label>
          <input type="textArea" placeholder="Notes" name="notes" value={this.state.notes} onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}


export default connect(null, {addInteraction})(InteractionForm);
