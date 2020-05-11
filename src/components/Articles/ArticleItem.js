import React from "react";

const ArticleItem = () => {
    return (
        <article class="item">
            <div class="image">
                <img src="/logo512.png" alt="blog post cover" />
            </div>
            <div class="content">
                <div class="header">The two gots</div>
                <div class="meta">
                    <a href="/" className="ui purple label">
                        Science Fiction
                    </a>
                    <a href="/" className="ui green label">
                        David Johnson
                    </a>
                </div>
                <div class="description">
                    <p>
                        A Fox one day spied a beautiful bunch of ripe grapes
                        hanging from a vine trained along the branches of a
                        tree. The grapes seemed ready to burst with juice, and
                        the Fox's mouth watered as he gazed longingly at them.
                    </p>
                </div>
                <div class="extra">
                    <div class="ui right floated primary button">
                        Read More
                        <i class="right chevron icon"></i>
                    </div>
                    <time href="#" className="ui label">
                        12th January, 2020
                    </time>
                </div>
            </div>
        </article>
    );
};

export default ArticleItem;
