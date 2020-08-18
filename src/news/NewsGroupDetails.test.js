import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NewsGroupDetails from './NewsGroupDetails';

describe('NewsGroupDetails test', () => {

  const route = {
    location: {},
    match: {
      params: { group: '' }
    }
  }

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><NewsGroupDetails match={route.match} /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
