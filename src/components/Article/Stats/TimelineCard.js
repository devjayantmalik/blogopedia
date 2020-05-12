import React from "react";

const TimelineCard = () => {
    return (
        <article class="ui card">
            <div class="content">
                <h4 class="ui sub header">Activity</h4>
                <ol className="ui ordered list">
                    <li className="item">David Johnson created Article on 12th January, 2020</li>
                    <li className="item">David Johnson published Article on 14th January, 2020</li>
                    <li className="item">David Johnson updated Article on 16th January, 2020</li>
                </ol>
            </div>
        </article>
    );
};

export default TimelineCard;
