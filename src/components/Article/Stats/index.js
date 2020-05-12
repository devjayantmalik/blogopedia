import React from "react";

import AuthorCard from "./AuthorCard";
import TimelineCard from "./TimelineCard";

const Stats = () => {
    return (
        <section className="ui raised black segment">
            <div className="ui cards">
                <AuthorCard />
                <TimelineCard />
            </div>
        </section>
    );
};

export default Stats;
