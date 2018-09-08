import React from 'react';
import ReactDOM from 'react-dom';
import NewsGroup from './NewsGroup';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewsGroup />, div);
  ReactDOM.unmountComponentAtNode(div);
});
