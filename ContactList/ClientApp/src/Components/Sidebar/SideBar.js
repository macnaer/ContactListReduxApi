import React from "react";

const SideBar = ({ contactCounter }) => {
    return (
        <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="contacts-labels">
                <div className="title">All contacts<span>{contactCounter}</span></div>
                <div className="list">
                    <div className="input-group">
                        <input type="text" className="contacts-search" placeholder="Search" />
                    </div>
                    <div className="head">Labels</div>
                    <div className="unit">
                        <div className="lab lab-success">Work</div><span>7</span>
                    </div>
                    <div className="unit">
                        <div className="lab lab-primary">Family</div><span>8</span>
                    </div>
                    <div className="unit">
                        <div className="lab lab-danger">Private</div><span>13</span>
                    </div>
                    <div className="unit">
                        <div className="lab lab-warning">Friends</div><span>47</span>
                    </div>
                    <button type="button" className="btn btn-primary font-weight-700">Add new label</button>
                </div>
            </div>
        </div>
    )
}

export default SideBar;