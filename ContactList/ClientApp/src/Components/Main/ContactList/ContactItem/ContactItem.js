import { Link } from "react-router-dom";

const ContactItem = ({ Id,Name, Email, Phone, Status, Image, Gender, DeleteContact, SetCurrentContact }) => {

    let defaultStatus = "lab lab-warning";

    switch (Status) {
        case "Work": defaultStatus = "lab lab-success"; break;
        case "Private": defaultStatus = "lab lab-danger"; break;
        case "Family": defaultStatus = "lab lab-primary"; break;
        case "Friend": defaultStatus = "lab lab-warning"; break;
    }

    const img = `https://api.randomuser.me/portraits/${Gender}/${Image}.jpg`;
    return (
        <div className="unit" >
            <div className="field name">
                <div className="check">
                    <input id="cb2" name="cb1" type="checkbox" />
                    <label htmlFor="cb2"></label>
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg>
                </div>
                <div>
                    <img src={img} alt="image" className="avatar" /> {Name}
                </div>
                <div className={defaultStatus} >{Status}</div>
            </div>
            <div className="field phone">
                {Phone}
            </div>
            <div className="field email">
                {Email}
            </div>
            <div className="icons">
                <Link to="/edit-contact"><i id={Id} className="far fa-edit fa-2x" onClick={()=>SetCurrentContact(Id)}></i></Link>
                <i className="far fa-trash-alt fa-2x" onClick={()=>DeleteContact(Id)}></i>
            </div>
        </div >
    )
}

export default ContactItem;