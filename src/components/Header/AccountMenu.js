import React from "react";

const AccountMenu = () => {
    return (
        <div className="ui simple dropdown item">
            Account
            <i className="dropdown icon"></i>
            <div className="menu">
                <div className="item">Profile</div>
                <div className="item">Account Settings</div>
                <div className="item">Notifications</div>
                <div className="item">Subscription</div>
                <div className="item">Logout</div>
            </div>
        </div>
    );
};

export default AccountMenu;
