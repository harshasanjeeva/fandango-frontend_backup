import React, {Component} from 'react';
import {Route,Router, Switch} from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as API from '../api/API';
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import '../App.css';
import history from "./History";

class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route  path='/login' component={Login}/>
                    <Route  path='/signup' component={Signup}/>

                </Switch>
            </Router>
        );

    }
}
export default Routes;