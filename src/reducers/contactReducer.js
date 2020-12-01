export default function contactReducer(state = { contacts: [] }, action) {
  switch (action.type) {
    case "FETCH_CONTACTS":
      return { contacts: action.payload };
    case "ADD_CONTACT":
      return { ...state, contacts: [...state.contacts, action.payload] };
    case "ADD_INTERACTION":
      let contacts = state.contacts.map((contact) => {
        if (contact.id === action.payload.id) {
          return action.payload;
        } else {
          return contact;
        }
      });
      return { ...state, contacts: contacts };
    case "DELETE_INTERACTION":
      let contacts2 = state.contacts.map((contact) => {
        if (contact.id === action.payload.id) {
          return action.payload;
        } else {
          return contact;
        }
      });
      return { ...state, contacts: contacts2 };
    case "EDIT_CONTACT":
      let contacts3 = state.contacts.map((contact) => {
        if (contact.id === action.payload.id) {
          return action.payload;
        } else {
          return contact;
        }
      });
      return { ...state, contacts: contacts3 };
    default:
      return state;
  }
}
