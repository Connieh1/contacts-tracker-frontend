

export default function contactReducer(state = {contacts: []}, action) {

  switch (action.type) {
    case 'FETCH_CONTACTS':
      return {contacts: action.payload}
    default:
      return state
  }
}
