import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/index.scss';

import Routes from "./routes/routes.js"

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

