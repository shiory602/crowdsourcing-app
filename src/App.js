import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/reset.scss';
import './styles/main.scss';

import Home from './pages/Index';
import HeaderPage from './pages/ui-test/header';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        {/* ui-test */}
        <Route exact path='/header'>
          <HeaderPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
