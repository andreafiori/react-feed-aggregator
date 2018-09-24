import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import About from './About';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><About /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
