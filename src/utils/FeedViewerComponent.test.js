import React from 'react';
import ReactDOM from 'react-dom';
import FeedViewerComponent from './FeedViewerComponent';

describe('FeedViewerComponent test', () => {

  const route = {
    location: {},
    match: {
      params: { group: '' }
    }
  }

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><FeedViewerComponent match={route.match} /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
