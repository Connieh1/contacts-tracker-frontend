

export const addContact = (data) => {
  return (dispatch) => {
  fetch('http://localhost:3000/api/v1/contacts', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(data)
  })
  .then(resp => resp.json())
  .then(contact => dispatch({
    type: 'ADD_CONTACT',
    payload: contact
  }))
  }
}
