import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import FeedsCategoryList from './FeedsCategoryList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><FeedsCategoryList /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
