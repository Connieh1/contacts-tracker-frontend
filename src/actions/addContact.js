export const addContact = (data) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((contact) => {
        if (contact.error) {
          alert(contact.error);
        } else {
        }
        dispatch({
          type: "ADD_CONTACT",
          payload: contact,
        });
      });
  };
};
