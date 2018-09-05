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
    <p>A ReactJS project to parse an RSS feed. Earch news feed is inside a group. You can easily select the news list you want to read.</p>
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
