import React, {Component} from 'react';
import {Route,Router, Switch} from 'react-router-dom';
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import Booking from "./Booking";
import Movies from "./Movies"
import AllTheatresAndTimings from "./AllTheatresAndTimings";
import '../App.css';
import Addhall from "./Addhall";
import history from "./History";
import Payments from "./Payments";
import Profile from "./Profile";
import adminLogin from "./admin/adminLogin";
import adminHome from "./admin/adminMovieHalls";
import ticket from "./ticket";
import addUser from "./admin/addUser";
import viewUsers from "./admin/viewUsers";
import adminMainPage from "./admin/adminMainPage";

// import Tickets from "./Tickets";



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
                    <Route  path='/payments' component={Payments}/>
                    <Route  path='/profile' component={Profile}/>
                    <Route  path='/addhall' component={Addhall}/>
                    <Route  path='/adminLogin' component={adminLogin}/>
                    <Route  path='/adminHome' component={adminHome}/>
                    <Route  path='/ticket' component={ticket}/>
                    <Route  path='/addUser' component={addUser}/>
                    <Route  path='/viewUsers' component={viewUsers}/>
                    <Route  path='/adminMainPage' component={adminMainPage}/>

                </Switch>
            </Router>
        );

    }
}
export default Routes;