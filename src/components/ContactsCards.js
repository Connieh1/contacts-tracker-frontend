import React from 'react';

const ContactsCards = (props) => {
  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Contacts</h5>
            <p className="card-text">With supporting text below as</p>
            <a href="/contacts" className="btn btn-primary">Contacts List</a>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">New Contacts</h5>
            <p className="card-text">With supporting text below as</p>
            <a href="/contacts/new" className="btn btn-primary">Create A New Contact</a>
          </div>
        </div>
      </div>
    </div>
  )
}


export default ContactsCards
