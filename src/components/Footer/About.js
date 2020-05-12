import React from "react";

const About = () => {
    return (
        <section className="three wide column">
            <div className="ui raised segment">
                <h4 className="ui header">About</h4>
                <ul className="ui link list">
                    <li className="item">
                        <a className="item" href="/">
                            Company
                        </a>
                    </li>
                    <li className="item">
                        <a className="item" href="/">
                            Developers
                        </a>
                    </li>
                    <li className="item">
                        <a className="item" href="/">
                            Contributors
                        </a>
                    </li>
                    <li className="item">
                        <a className="item" href="/">
                            How to
                        </a>
                    </li>
                    <li className="item">
                        <a className="item" href="/">
                            Future Plans
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default About;
