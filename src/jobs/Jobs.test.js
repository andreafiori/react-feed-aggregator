import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Jobs from './Jobs';

describe('Jobs component tests', function() {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><Jobs /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});
