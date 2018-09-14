import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import App from './components/App.js';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render((<Router basename="/"><App /></Router>), document.getElementById('root'));
registerServiceWorker();
