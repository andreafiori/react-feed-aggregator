import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './components/App';
/* IE Polyfills */
import 'core-js/es/map';
import 'core-js/es/set';
import 'core-js/es/promise';
import 'raf/polyfill';
/* Styles */
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './styles/App.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render((<HashRouter><App /></HashRouter>), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
