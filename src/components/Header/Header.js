import React from "react";

import AccountMenu from "./AccountMenu";
import SearchItem from "./SearchItem";

class Header extends React.Component {

    onSearchSubmit = (text) => {
        console.log(text);
    }


    render() {
        return (
            <header className="ui orange stackable secondary pointing menu">
                <a className="active item" href="/">
                    Blogpedia
                </a>

                <div className="right menu">
                    <SearchItem placeholder="Search for articles..." onSubmit={this.onSearchSubmit} />
                    <a className="item" href="/">
                        Subjects
                    </a>
                    <a href="/" className="item">
                        Articles
                    </a>
                    <AccountMenu />
                </div>
            </header>
        );
    }
}

export default Header;
