import 'reflect-metadata';

import { createBrowserHistory } from 'history';
import React from 'react';
import { render } from 'react-dom';
import { Route, Router, Switch } from 'react-router-dom';

import { Container } from './examples/container';
import { Inheritance } from './examples/inheritance';
import { Rebind } from './examples/rebind';
import { Nav } from './nav';

const customHistory = createBrowserHistory();

const App: React.FunctionComponent = () => {
  return (
    <Router history={customHistory}>
      <Switch>
        <Route exact path="/">
          <Nav />
        </Route>
        <Route exact path="/container">
          <Container />
        </Route>
        <Route exact path="/inheritance">
          <Inheritance />
        </Route>
        <Route exact path="/rebind">
          <Rebind />
        </Route>
      </Switch>
    </Router>
  );
};

render(<App />, document.getElementById('app'));
