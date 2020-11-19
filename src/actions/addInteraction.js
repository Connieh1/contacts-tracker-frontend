export const addInteraction = (interaction, contactId) => {


  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/contacts/${contactId}/interactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(interaction)
    })
    .then(response => response.json())
    .then(contact => {
        if (contact.error) {
          alert(contact.error)
        } else {
          dispatch({type: 'ADD_INTERACTION', payload: contact})
        }
      }
    )
  }
}
