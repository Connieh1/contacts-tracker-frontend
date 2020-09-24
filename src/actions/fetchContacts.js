

export function fetchContacts() {
  return (dispatch) => {
  fetch('http://localhost:3000/api/v1/contacts')
  .then(resp => resp.json())
  .then(contacts => dispatch({
    type: 'FETCH_CONTACTS',
    payload: contacts
  }))
  }
}
