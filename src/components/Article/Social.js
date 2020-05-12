import React from 'react';

const Social = () => {
    return(
            <section className="ui stackable  labelled icon menu">
                <a href="/" className="item">
                    <i className="large blue twitter icon" />
                    <span> Tweet</span>
                </a>
                <a href="/" className="item">
                    <i className="large facebook icon" />
                    <span> Facebook</span>
                </a>
                <a href="/" className="item">
                    <i className="large mail icon" />
                    <span> Email</span>
                </a>
                <a href="/" className="item">
                    <i className="large file pdf icon" />
                    <span> PDF</span>
                </a>
            </section>
    )
}

export default Social;