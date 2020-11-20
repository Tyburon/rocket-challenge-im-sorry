import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Blog from '../pages/Blog';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/blog" exact component={Blog} />
  </Switch>
);

export default Routes;
