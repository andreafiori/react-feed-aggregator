import React, { Component } from 'react';
import Breadcrumbs from './Breadcrumbs';

class About extends Component {
  render() {
    const breadcrumbs = [
      { label: 'About', href: '', title: '', active: true }
    ];

    return (
      <div>
        <Breadcrumbs elements={breadcrumbs} />

        <h2>News Feed Aggregator</h2>
        <p>This project will join multiple news feeds for various categories. You can read all the latest news on the most popular websites.</p>
        
        <h4>RSS feed format</h4>
        <p>RSS (<a rel="noopener noreferrer" target="_blank" href="https://validator.w3.org/feed/docs/rss2.html">Really Simple Syndication</a>) News feeds allow you to see when websites have added new content.</p>

        <h4>The Atom format</h4>
        <p>The name Atom applies to a pair of related Web standards. The <a rel="noopener noreferrer" target="_blank" href="https://en.wikipedia.org/wiki/Atom_(Web_standard)">Atom Syndication Format</a> is an XML language used for web feeds, while the Atom Publishing Protocol (AtomPub or APP) is a simple HTTP-based protocol for creating and updating web resources.</p>
      </div>
    );
  }
}

export default About;