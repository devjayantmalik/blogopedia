import React from "react";

const Content = ({ children }) => (
    <section className="twelve wide column">
        <div className="ui segment items">{children}</div>
    </section>
);

export default Content;
