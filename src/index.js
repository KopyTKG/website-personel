import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/index.scss';
import Routes from "./routes/routes.js"

import {settings} from "./temp/settings";

ReactDOM.render(
  <React.StrictMode>
    <Routes settings={settings}/>
  </React.StrictMode>,
  document.getElementById('root')
);

