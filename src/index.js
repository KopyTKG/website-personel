import React from 'react';
import ReactDOM from 'react-dom';

import Routes from "./routes/routes.js"

import './assets/scss/index.scss';
import 'react-notifications/lib/notifications.css';


ReactDOM.render(
  <React.StrictMode>
    <Routes/>
  </React.StrictMode>,
  document.getElementById('root')
);

