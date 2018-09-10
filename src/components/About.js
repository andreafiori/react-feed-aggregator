import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div>
        <h2>News Feed Aggregator</h2>
        <p>A ReactJS project to parse an RSS feed. You can easily select a newsgroup and the realted news category you want to read.</p>
        
        <h3>RSS feed format</h3>
        <p>RSS (<a rel="noopener noreferrer" href="https://validator.w3.org/feed/docs/rss2.html" target="_blank">Really Simple Syndication</a>) News feeds allow you to see when websites have added new content.</p>
      </div>
    );
  }
}

export default About;