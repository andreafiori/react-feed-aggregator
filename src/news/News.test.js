import React from 'react';
import ReactDOM from 'react-dom';
import News from './News';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<News />, div);
  ReactDOM.unmountComponentAtNode(div);
});
