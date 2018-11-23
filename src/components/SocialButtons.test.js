import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import SocialButtons from './SocialButtons';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><SocialButtons /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
