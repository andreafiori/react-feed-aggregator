import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import WillMatch from './WillMatch';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><WillMatch /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
