import React, { Component } from 'react';
import './css/App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Search from './page/Search.js';
import Result from './page/Result.js'
import Saved from './page/Saved.js'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Search} />
          <Route exact path='/result/' component={Result} />
          <Route exact path='/saved/' component={Saved} />
        </Switch>
      </Router>
    );
  };
};

export default App;
