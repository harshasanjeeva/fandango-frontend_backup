import React, {Component} from 'react';
import {Route,Router, Switch} from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as API from '../api/API';
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import Booking from "./Booking";
import Movies from "./Movies"
import history from "./History";
import AllTheatresAndTimings from "./AllTheatresAndTimings";
import '../App.css';

class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route  path='/login' component={Login}/>
                    <Route  path='/signup' component={Signup}/>
                    <Route  path='/booking' component={Booking}/>
                    <Route  path='/movies' component={Movies}/>
                    <Route  path='/alltheatresAndTimings' component={AllTheatresAndTimings}/>

                </Switch>
            </Router>
        );

    }
}
export default Routes;