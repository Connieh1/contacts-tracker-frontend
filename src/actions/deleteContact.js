// export const deleteContact = (contactId) => {
//   return (dispatch) => {
//     return fetch(`http://localhost:3000/api/v1/contacts/${contactId}`, {
//       method: 'DELETE'
//     })
//     .then(response => response.json())
//     .then(contact => dispatch({type: 'DELETE_CONTACT', payload: contact.id}))
//   }
// }

export const deleteContact = contactId =>
  {
    return (dispatch) => {
      return fetch(`http://localhost:3000/api/v1/contacts/${contactId}`, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(contact => dispatch({type: 'DELETE_CONTACT', payload: contact}))
    }
  }
