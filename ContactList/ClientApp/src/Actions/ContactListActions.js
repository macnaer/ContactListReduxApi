export const UpdateContactList = (contactList) => {
    return {
        type: "UPDATE_CONTACT_LIST",
        payload: contactList
    }
}

export const SetCurrentContact  = (currentContact) => {
    return {
        type: "SET_CURRENT_CONTACT",
        payload: currentContact
    }
}