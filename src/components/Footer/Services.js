import React from "react";

const Services = () => {
    return (
        <section className="three wide column">
            <div className="ui raised segment">
                <h4 className="ui header">Services</h4>
                <ul className="ui link list">
                    <li className="item">
                        <a className="item" href="/">
                            Developer
                        </a>
                    </li>
                    <li className="item">
                        <a className="item" href="/">
                            Pricing
                        </a>
                    </li>
                    <li className="item">
                        <a className="item" href="/">
                            FAQs
                        </a>
                    </li>
                    <li className="item">
                        <a className="item" href="/">
                            Message Board
                        </a>
                    </li>
                    <li className="item">
                        <a className="item" href="/">
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Services;
