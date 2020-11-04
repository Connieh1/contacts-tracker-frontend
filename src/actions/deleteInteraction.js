export const deleteInteraction = (interactionId, contactId) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/contacts/${contactId}/interactions/${interactionId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(contact => dispatch({type: 'DELETE_INTERACTION', payload: contact}))
  }
}
