import React from 'react';

import Hero from './Hero';
import Social from './Social';
import Content from './Content';
import Stats from './Stats';

const Article = () => {
    return(
        <main className="ui container">
            <Hero />
            <Social />
            <Content />
            <Social />
            <Stats />
        </main>
    )
}

export default Article;