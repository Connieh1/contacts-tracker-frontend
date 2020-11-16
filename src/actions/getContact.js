export function getContact = (id) => {
return (dispatch) => {
  fetch(`http://localhost:3000/api/v1/contacts/${id}`)
    .then(resp => resp.json())
    .then(contacts => dispatch({
      type: 'GET_CONTACT',
      payload: contact
    }))
    }
  }
