import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
          <div className="col-md-6 px-0">
            <h1 className="display-4 font-italic">The latest News Aggregator</h1>
            <p className="lead my-3">A generic news aggregator created with ReactJS.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
