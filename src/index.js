import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.css';
import './styles/main.css';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

