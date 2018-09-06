import React from 'react';

export const Home = () => (
  <div>
    <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
      <div className="col-md-6 px-0">
        <h1 className="display-4 font-italic">The latest News Aggregator</h1>
        <p className="lead my-3">A generic news aggregator created with ReactJS.</p>
      </div>
    </div>
  </div>
);

export const About = () => (
  <div>
    <h2>News Feed Aggregator</h2>
    <p>A ReactJS project to parse an RSS feed. You can easily select a newsgroup and the realted news category you want to read.</p>
    
    <h3>RSS feed format</h3>
    <p>RSS (<a rel="noopener noreferrer" href="https://validator.w3.org/feed/docs/rss2.html" target="_blank">Really Simple Syndication</a>) News feeds allow you to see when websites have added new content.</p>
  </div>
);

export const UnderContruction = () => (
  <div className="alert alert-warning">
    <h2>UnderContruction</h2>
    <p>This section is under construction. Please come back later!</p>
  </div>
);

export const WillMatch = () => <h3>Matched!</h3>;

export const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);
