import React, { Component } from 'react';
import {Router} from 'react-router-dom';
import Root from './components/Root';
import './App.css';

//import Button from 'react-bootstrap/lib/Button';
import history from '../src/components/History';
import {Route, Switch} from 'react-router-dom';
import Profile from '../src/components/Profile';
import {withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router history = {history}>
      <Switch>
      <Route exact path='/' component={Home}/>

       </Switch>
      </Router>
      </div>
    );
  }
}

export default (App);
