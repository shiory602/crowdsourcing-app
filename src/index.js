import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.css';
import './styles/main.css';

import Home from './components/home';
import Login from './components/login';
import Register from './components/register';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

