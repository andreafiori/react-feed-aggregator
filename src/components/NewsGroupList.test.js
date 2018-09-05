import React from 'react';
import ReactDOM from 'react-dom';
import NewsGroupList from './NewsGroupList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewsGroupList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
