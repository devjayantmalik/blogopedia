import React, { useState } from "react";

const SearchItem = ({ onSubmit, placeholder }) => {
    const [searchText, setSearchText] = useState("");

    return (
        <form
            className="item"
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(searchText);
            }}
        >
            <div className="ui icon input">
                <input
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    maxLength={80}
                    placeholder={placeholder}
                />
                <i className="search link icon"></i>
            </div>
        </form>
    );
};

export default SearchItem;
