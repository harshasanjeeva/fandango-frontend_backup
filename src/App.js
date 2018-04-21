import React, { Component } from 'react';
import {Router} from 'react-router-dom';
// import Root from './components/Root';
import './App.css';
import Routes from "./components/Routes";
import {BrowserRouter} from 'react-router-dom';
//import Button from 'react-bootstrap/lib/Button';
import history from '../src/components/History';
import {Route, Switch} from 'react-router-dom';

import {withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
              <Routes/>
          </BrowserRouter>
      </div>
    );
  }
}

export default (App);
