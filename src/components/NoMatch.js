import React from 'react';

const NoMatch = ({ location }) => (
  <div>
    <h3>Page not found!</h3>
    <p>
      No match for <code>{location.pathname}</code>
    </p>
  </div>
);

export default NoMatch;