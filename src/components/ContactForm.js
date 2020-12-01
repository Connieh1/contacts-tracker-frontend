import React from "react";
import { connect } from "react-redux";
import { addContact } from "../actions/addContact";

class ContactForm extends React.Component {
  state = {
    name: "",
    company: "",
    telephone: "",
    email: "",
    category: "Personal",
    errors: {},
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addContact(this.state);
    this.setState({
      name: "",
      telephone: "",
      email: "",
      company: "",
      category: "Personal",
    });

    if (this.state.name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }

    if (this.state.email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }

    if (this.state.telephone === "") {
      this.setState({ errors: { phone: "Phone is required" } });
      return;
    }

    this.props.history.push("/contacts");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Category:</label>
          <select
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
          >
            <option>Personal</option>
            <option>Client</option>
            <option>Professional</option>
            <option>Other</option>
          </select>
          <label>Contact Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label>Telephone: </label>
          <input
            type="text"
            name="telephone"
            placeholder="Telephone"
            value={this.state.telephone}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label>Email: </label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label>Contact's Company: </label>
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={this.state.company}
            onChange={this.handleChange}
          />
          <br />
          <br />
          {/*<label>Contact Type: </label>
           <input type='text' name='category' placeholder='Contact Type (eg. Personal, Client, Professional)' value={this.state.type} onChange={this.handleChange} /><br/>*/}
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default connect(null, { addContact })(ContactForm);
