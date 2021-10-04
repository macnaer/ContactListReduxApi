const initialState = {
  ContactList: [],
  CurrentContact: null,
};

const ContactListReducer = (state = initialState, action) => {
  console.log("action", action);
  switch (action.type) {
    case "UPDATE_CONTACT_LIST":
      return {
        ...state,
        ContactList: action.payload,
      };
    case "SET_CURRENT_CONTACT":
      return {
        ...state,
        CurrentContact: action.payload,
      };
    default:
      return state;
  }
};

export default ContactListReducer;
