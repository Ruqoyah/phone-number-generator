import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
import PhoneNumbers from './PhoneNumbers';

/**
 * @class App
 *
 * @classdesc route
 *
 */
export default class App extends Component {
  render = () => (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/phone-numbers" component={PhoneNumbers} />
        </Switch>
      </div>
    </Router>
  );
}

