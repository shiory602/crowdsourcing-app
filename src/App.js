import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/reset.scss';
import './styles/main.scss';

import Home from './pages/Index';
import Test from './pages/ui-test/test';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        {/* ui-test */}
        <Route exact path='/test'>
          <Test />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
