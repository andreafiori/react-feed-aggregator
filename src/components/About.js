import React, { Component } from 'react';
import Breadcrumbs from './Breadcrumbs';

class About extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      breadcrumbs: [
        { label: 'About', href: null, title: null, active: true }
      ]
    };
  }

  render() {

    const { breadcrumbs } = this.state;

    return (
      <div>
        <Breadcrumbs elements={breadcrumbs} />

        <h2>News Feed Aggregator</h2>
        <p>A ReactJS project to parse an RSS feed. You can easily select a newsgroup and the realted news category you want to read.</p>
        
        <h3>RSS feed format</h3>
        <p>RSS (<a rel="noopener noreferrer" target="_blank" href="https://validator.w3.org/feed/docs/rss2.html">Really Simple Syndication</a>) News feeds allow you to see when websites have added new content.</p>
        <p><a rel="noopener noreferrer" target="_blank" href="https://en.wikipedia.org/wiki/Atom_(Web_standard)"></a>Atom format: </p>
      </div>
    );
  }
}

export default About;