export const editContact = (data) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/contacts/${data.id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(contact => dispatch({type: 'EDIT_CONTACT', payload: contact}))
  }

}
