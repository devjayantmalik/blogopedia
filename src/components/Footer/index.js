import React from "react";

import SiteInfo from "./SiteInfo";
import About from "./About";
import Services from "./Services";

const Footer = () => {
    return (
        <footer className="ui vertical footer segment">
            <div className="ui container">
                <div className="ui stackable divided equal height stackable grid">
                    <SiteInfo />
                    <About />
                    <Services />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
