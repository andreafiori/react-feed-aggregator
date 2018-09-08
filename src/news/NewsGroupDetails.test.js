import React from 'react';
import ReactDOM from 'react-dom';
import NewsGroupDetails from './NewsGroupDetails';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewsGroupDetails />, div);
  ReactDOM.unmountComponentAtNode(div);
});
