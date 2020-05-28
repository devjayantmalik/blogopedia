import React from "react";

import { HashRouter, Switch, Route } from "react-router-dom";

import Header from "../components/Header";
import Articles from "../components/Articles";
import Article from "../components/Article";

const ClientRouter = () => {
    return (
        <HashRouter>
            <Header />
            <Switch>
                <Route path="/" exact component={Articles} />
                <Route path="/article/:slug" exact component={Article} />
            </Switch>
        </HashRouter>
    );
};

export default ClientRouter;
