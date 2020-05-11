import React from "react";

import Content from "./Content";
import ArticleItem from "./ArticleItem";
import RightSidebar from "./RightSidebar";

class Articles extends React.Component {
    render() {
        return (
            <main className="ui basic segment">
                <div className="ui stackable grid">
                    <Content>
                        <ArticleItem />
                        <ArticleItem />
                        <ArticleItem />
                        <ArticleItem />
                    </Content>
                    <RightSidebar />
                </div>
            </main>
        );
    }
}

export default Articles;
