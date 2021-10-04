import { Component } from "react";
import { connect } from "react-redux";

// Import API Service
import apiService from "../../../Services/APIService";
// Import actions
import { UpdateContactList, SetCurrentContact} from "../../../Actions/ContactListActions";
import Contactitem from "./ContactItem/ContactItem";

// Import components
class ContactList extends Component {
  constructor(props)
  {
    super(props);
    this._SetCurrentContact = this._SetCurrentContact.bind(this); 
    this.DeleteContact = this.DeleteContact.bind(this);   
  }
  componentDidMount() {
    if(this.props.ContactList.length===0)
    {
      apiService.GetContactList().then((contactList) => {
        this.props.UpdateContactList(contactList);
      });
    }
  }
  DeleteContact(Id) {
    const newList = this.props.ContactList.slice()
    const index = newList.findIndex((item) => item.Id === Id);
    newList.splice(index,1);
    apiService.DeleteContact(Id);
    this.props.UpdateContactList(newList);
  }

  _SetCurrentContact(Id) {
    const index = this.props.ContactList.findIndex(
      (elem) => elem.Id === Id
    );
     const currentContact = this.props.ContactList[index];
     this.props.SetCurrentContact(currentContact);
  }
  render() {          
    if (this.props.ContactList?.length > 0) {
      return this.props.ContactList.map((item) => {
        return (
          <Contactitem
            key={item.Id}
            {...item}
            DeleteContact={this.DeleteContact}
            SetCurrentContact={this._SetCurrentContact}
          />
        );
      });
    }
    return (
      <section>
        <p className="emptyList">Contact list is empty.</p>
      </section>
    );
  }
}

const mapStateToProps = ({ ContactListReducer }) => {
  const { ContactList } = ContactListReducer;
  const { CurrentContact } = ContactListReducer;
  return { ContactList, CurrentContact };
};

const mapDispatchToProps = {
  UpdateContactList,
  SetCurrentContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);