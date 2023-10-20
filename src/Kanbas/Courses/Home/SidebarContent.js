import React from 'react';

function SidebarContent() {
    return (
        <div>
            <div className="d-grid gap-1">
                <button className="btn btn-secondary btn-sm no-wrap custom-btn-width" type="button">Import Existing Content</button>
                <button className="btn btn-secondary btn-sm no-wrap" type="button">Import From Commons</button>
                <button className="btn btn-secondary btn-sm no-wrap" type="button">Choose Home Page</button>
                <button className="btn btn-secondary btn-sm no-wrap" type="button">View Course Stream</button>
                <button className="btn btn-secondary btn-sm no-wrap" type="button">Import Existing Content</button>
                <button className="btn btn-secondary btn-sm no-wrap" type="button">New Announcement</button>
                <button className="btn btn-secondary btn-sm no-wrap" type="button">New Analytics</button>
                <button className="btn btn-secondary btn-sm no-wrap" type="button">Import Existing Content</button>
                <button className="btn btn-secondary btn-sm no-wrap" type="button">View Course Notification</button>
            </div>
            <br />
            <h5>To Do</h5>
            <hr/>
            <p style={{color: 'red'}}>Grade A1- ENV-HTML</p>
            <p>100 POINTS</p>
            <br />
            <div className="header">
                <h5>Comming Up</h5>
                <a href="#" className="wd-hyper-red">
                    <i className="fas fa-calendar-alt"></i>View Calendar
                </a>
            </div>
            <hr />
            <div className="header">
                <div className="text-container">
                    <h5 className="wd-hyper-red">
                        <i className="fas fa-calendar-alt"></i>Lecture
                    </h5>
                    <p>Sep 11 at 11:45 pm</p>
                </div>
            </div>
            <div className="header">
                <div className="text-container">
                    <h5 className="wd-hyper-red">
                        <i className="fas fa-calendar-alt"></i>CS5610 06 SP23 Lecture
                    </h5>
                    <p>Sep 11 at 11:45 pm</p>
                </div>
            </div>
            <div className="header">
                <div className="text-container">
                    <h5 className="wd-hyper-red">
                        <i className="fas fa-calendar-alt"></i>CS5610 Web Development Summer 1
                    </h5>
                    <p>Sep 11 at 11:45 pm</p>
                </div>
            </div>
        </div>
    );
}

export default SidebarContent;
