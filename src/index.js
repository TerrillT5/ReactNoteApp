import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
   Route,
   IndexRoute,
   hashHistory } from 'react-router';
import './index.css';
import App from './App';

import Board from './components/Notes/Board';
import Users from './components/Users';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Board count={50} />, document.getElementById('root'));
registerServiceWorker();
