import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/reset.scss';
import './styles/main.scss';

import Home from './pages/Index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
