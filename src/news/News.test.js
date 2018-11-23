import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import News from './News';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><News /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
