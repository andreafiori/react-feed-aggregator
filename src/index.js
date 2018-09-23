import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import App from './components/App';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';
import history from 'history/createBrowserHistory';

ReactDOM.render((<HashRouter history={history}><App /></HashRouter>), document.getElementById('root'));
registerServiceWorker();
