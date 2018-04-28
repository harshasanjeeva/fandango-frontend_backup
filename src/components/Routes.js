import React, {Component} from 'react';
import {Route,Router, Switch} from 'react-router-dom';
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import Booking from "./Booking";
import Movies from "./Movies"
import AllTheatresAndTimings from "./AllTheatresAndTimings";
import '../App.css';
import Addmovies from "./Addmovies";
import Addhall from "./Addhall";
import history from "./History";
import Payments from "./Payments";
import Profile from "./Profile";
import adminLogin from "./admin/adminLogin";
import adminHome from "./admin/adminHome";
import ticket from "./ticket";
import addUser from "./admin/addUser";
import viewUsers from "./admin/viewUsers"
import Adminanalytics from "./Adminanalytics"

// import Tickets from "./Tickets";

import Admindash from "./Admindash";

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
                    <Route  path='/admindash' component={Admindash}/>
                    
                    <Route  path='/adminanalytics' component={Adminanalytics}/>
                    <Route  path='/payments' component={Payments}/>
                    <Route  path='/profile' component={Profile}/>
                    <Route  path='/addmovies' component={Addmovies}/>
                    <Route  path='/addhall' component={Addhall}/>
                    <Route  path='/adminLogin' component={adminLogin}/>
                    <Route  path='/adminHome' component={adminHome}/>
                    <Route  path='/ticket' component={ticket}/>
                    <Route  path='/addUser' component={addUser}/>
                    <Route  path='/viewUsers' component={viewUsers}/>
                </Switch>
            </Router>
        );

    }
}
export default Routes;