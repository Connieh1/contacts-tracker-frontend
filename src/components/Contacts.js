import React from "react";
import { Route, Link } from "react-router-dom";
import Contact from "./Contact";

class Contacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleClick = (id) => () => {
    this.setState((prevState) => ({
      [id]: prevState[id] ? prevState[id] - 1 : 1,
    }));
  };

  render() {
    return (
      <div>
        {this.props.contacts.map((contact) => (
          <li className="list-group-item" key={contact.id}>
            <Link to={`/contacts/${contact.id}`}>
              {contact.name} - {contact.company} - {contact.category}
            </Link>
            {"  "}
            <button key={contact.id} onClick={this.handleClick(contact.id)}>
              Vote: {this.state[contact.id] || 0}
            </button>
          </li>
        ))}
      </div>
    );
  }
}

export default Contacts;
