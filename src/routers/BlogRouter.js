import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Articles from "../components/Articles";
import Article from "../components/Article";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BlogRouter = () => {
    return (
        <HashRouter>
            <Header />
            <Switch>
                <Route path="/" exact component={Articles} />
                <Route path="/article/:slug" exact component={Article} />
            </Switch>
            <Footer />
        </HashRouter>
    );
};

export default BlogRouter;
