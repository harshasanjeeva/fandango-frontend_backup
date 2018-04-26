import React, {Component} from 'react';
import {Route,Router, Switch} from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as API from '../api/API';
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import Booking from "./Booking";
<<<<<<< Updated upstream
import Movies from "./Movies"
=======
import Tickets from "./Tickets";
import Addmovies from "./Addmovies";
import Addhall from "./Addhall";
>>>>>>> Stashed changes
import '../App.css';
import history from "./History";
import Payments from "./Payments";
import Profile from "./Profile";


class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route  path='/login' component={Login}/>
                    <Route  path='/signup' component={Signup}/>
                    <Route  path='/booking' component={Booking}/>
<<<<<<< Updated upstream
                    <Route  path='/movies' component={Movies}/>
                    <Route  path='/payments' component={Payments}/>
                    <Route  path='/profile' component={Profile}/>
=======
                    <Route  path='/tickets' component={Tickets}/>
                    <Route  path='/addmovies' component={Addmovies}/>
                    <Route  path='/addhall' component={Addhall}/>

>>>>>>> Stashed changes
                </Switch>
            </Router>
        );

    }
}
export default Routes;