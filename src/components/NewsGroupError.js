import React, { Component } from 'react';
import Breadcrumbs from './Breadcrumbs.js';

class NewsGroupError extends Component {

  constructor(props) {
    super(props);

    this.state = {
      breadcrumbs: this.props.breadcrumbs
    };
  }

  render() {
    
    return(
      <div>
        <Breadcrumbs elements={this.props.breadcrumbs} />

        <div className="alert alert-warning">
          <h3>No news group</h3>
          <p>The selected newsgroup were not found.</p>
        </div>
      </div>
    );
  }
}

export default NewsGroupError;
