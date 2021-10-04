class ContactListService {
  async GetContactList() {
    const List = await fetch("/Contact/get-all-contacts")
      .then((responce) => {
        return responce.json();
      })
      .then((data) => {
        if (data == null) {
          return {
            List: [],
          };
        } else {
          return data;
        }
      })
      .catch((err) => console.log(err));
    return List;
  }

  AddContact(contact) {
      fetch("/Contact/add-contact", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(contact),
    })
      .then((res) => console.log(res))
      .catch((res) => console.log(res));
  }

  EditContact(contact) {
     fetch("/Contact/edit-contact", {
     headers: {
       "Content-Type": "application/json",
     },
     method: "PUT",
     body: JSON.stringify(contact),
   })
     .then((res) => console.log(res))
     .catch((res) => console.log(res));
 }

 DeleteContact(Id) {
  fetch("/Contact/delete-contact", {
  headers: {
    "Content-Type": "application/json",
  },
  method: "DELETE",
  body: JSON.stringify(Id),
})
  .then((res) => console.log(res))
  .catch((res) => console.log(res));
}
}

const apiService = new ContactListService();
export default apiService;
