import React from 'react';
import Breadcrumbs from './Breadcrumbs.js';

const NewsGroupError = (props) => (
  <div>
    <Breadcrumbs elements={props.breadcrumbs} />

    <div className="alert alert-warning">
      <h3>No news group</h3>
      <p>The selected newsgroup were not found.</p>
    </div>
  </div>
);


export default NewsGroupError;
