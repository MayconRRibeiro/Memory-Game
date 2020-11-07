import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Board from '../pages/Board';
import Leaderboard from '../pages/Leaderboard';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/board" component={Board} />
      <Route path="/leaderboard" component={Leaderboard} />
    </Switch>
  </Router>
);

export default Routes;
