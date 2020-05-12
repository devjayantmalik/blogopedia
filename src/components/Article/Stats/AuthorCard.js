import React from "react";

const AuthorCard = () => {
    return (
        <section className="ui card">
            <div class="image">
                <img
                    src="https://semantic-ui.com/images/avatar2/large/matthew.png"
                    alt="author"
                />
            </div>
            <div class="content">
                <div class="header">David Johnson</div>
                <div class="description">
                    David is an interior designer living in New York.
                </div>
            </div>
            <div class="extra content">
                <span class="right floated">Joined in 2013</span>
                <span>
                    <i class="user icon"></i>
                    75 Articles
                </span>
            </div>
        </section>
    );
};

export default AuthorCard;
