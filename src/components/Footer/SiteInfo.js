import React from "react";

const SiteInfo = () => {
    return (
        <section className="three wide column">
            <div className="ui raised segment">
                <img
                    className="ui centered image"
                    style={{ width: 100, height: 100 }}
                    src="/logo512.png"
                    alt="site logo"
                />
                <h4 className="ui header">BlogPedia</h4>
                <p>Fast, Simple, Secure blogging platform</p>
            </div>
        </section>
    );
};

export default SiteInfo;
