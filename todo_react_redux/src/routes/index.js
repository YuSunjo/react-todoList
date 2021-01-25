import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'containers/home/Home';
import Todo from 'containers/todo/Todo';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/todo" component={Todo} />
  </Switch>
);

export default Routes;
