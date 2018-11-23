import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><Breadcrumbs /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders with elements', () => {
  const div = document.createElement('div');
  const breadcrumbs = [
    { label: 'Section', href: '/', title: 'Section description', active: false },
    { label: 'Example', href: null, title: null, active: true }
  ];
  ReactDOM.render(<Router><Breadcrumbs elements={breadcrumbs} /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
