

export default function contactReducer(state = {contacts: []}, action) {

  switch (action.type) {
    case 'FETCH_CONTACTS':
      return {contacts: action.payload}
    case 'ADD_CONTACT':
      return {...state, contacts: [...state.contacts, action.payload]}
    default:
      return state
  }
}
