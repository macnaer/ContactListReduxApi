import { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { UpdateContactList } from "../../Actions/ContactListActions";
import { connect } from "react-redux";
import apiService from "../../Services/APIService"

class EditContact extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            Id: this.props.CurrentContact.Id,
            Name: this.props.CurrentContact.Name,
            Phone: this.props.CurrentContact.Phone,
            Email: this.props.CurrentContact.Email,
            Gender: this.props.CurrentContact.Gender,
            Status: this.props.CurrentContact.Status,
            Image: this.props.CurrentContact.Image,
            isRedirect: false
        }
    }
    onGetName = (e) => {
        const name = e.target.value;
        this.setState({
            Name: name
        })
    }
    onGetPhone = (e) => {
        const phone = e.target.value;
        this.setState({
            Phone: phone
        })
    }
    onGetEmail = (e) => {
        const email = e.target.value;
        this.setState({
            Email: email
        })
    }
    onGetStatus = (e) => {
        const status = e.target.value;
        this.setState({
            Status: status
        })
    }
    onGetGender = (e) => {
        const gender = e.target.value;
        this.setState({
            Gender: gender
        })
    }
    onGetImage = (e) => {
        const image = e.target.value;
        this.setState({
            Image: image
        })
    }
    onGetAvatar = (e) => {
        const avatar = e.target.value;

        this.setState({
            Image: avatar,
        })
    }

    EditContact = (e) => {
        e.preventDefault();
        const { editContact } = this.props;
        const { Id, Name, Phone, Email, Status, Image, Gender, isRedirect } = this.state;
        const NewContact = {
            Id,
            Name,
            Phone,
            Email,
            Gender,
            Status,
            Image,
        }
        const newList = this.props.ContactList.slice();
        const index = newList.findIndex(elem => elem.Id === Id);
        newList[index]=NewContact;
        this.props.UpdateContactList(newList);
        apiService.EditContact(NewContact);
        this.setState({
            isRedirect: true
        })
    }

    render() {
        let { Name, Phone, Status, Email } = this.props.CurrentContact;

        let { isRedirect, Image, Gender } = this.state;
        let Avatar = Image;
        if (isRedirect === true) {
            return <Redirect to="/" />
        }
        if (Image === "" || Image === null) {
            Image = `https://upload.wikimedia.org/wikipedia/commons/5/50/User_icon-cp.svg`;
        } else {
            Image = `https://api.randomuser.me/portraits/${Gender}/${Image}.jpg`;
        }
        return (
            <Fragment>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="navbar-brand" to="/">Contact list</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>Edit contact</h2>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-8">
                            <form onSubmit={this.EditContact}>
                                <div className="form-group">
                                    <label htmlFor="Name">Name</label>
                                    <input name="Name" type="text" defaultValue={Name} className="form-control" onChange={this.onGetName} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Phone">Phone</label>
                                    <input name="Phone" type="tel" defaultValue={Phone} className="form-control" onChange={this.onGetPhone} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" className="form-control" defaultValue={Email} onChange={this.onGetEmail} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Gender">Gender</label>
                                    <select className="custom-select" onChange={this.onGetGender}>
                                        <option defaultValue>{Gender}</option>
                                        <option value="women">Women</option>
                                        <option value="men">Men</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Status">Status</label>
                                    <select className="custom-select" onChange={this.onGetStatus}>
                                        <option defaultValue>{Status}</option>
                                        <option value="Work">Work</option>
                                        <option value="Family">Family</option>
                                        <option value="Private">Private</option>
                                        <option value="Friend">Friend</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Avatar">Avatar</label>
                                    <input type="number" min="0" max="99" defaultValue={Avatar} className="form-control" onChange={this.onGetAvatar} />
                                </div>
                                <button type="submit" className="btn btn-primary">Save</button>
                            </form>
                        </div>
                        <div className="col-4">
                            <img src={Image} className="rounded avatar float-left" alt="..." />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
const mapStateToProps = ({ContactListReducer}) => {
    const {ContactList} =ContactListReducer;
    const {CurrentContact} =ContactListReducer;
    return {ContactList,CurrentContact};
};
const mapDispatchToProps=
{
    UpdateContactList
}
export default connect(mapStateToProps,mapDispatchToProps)(EditContact);