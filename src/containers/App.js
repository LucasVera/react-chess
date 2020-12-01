import React, { Fragment } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Game from './Game';
import Home from './Home';

export default function App() {
  return (
    <Fragment>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/game" component={Game} />
      </Router>
    </Fragment>
  )
}
