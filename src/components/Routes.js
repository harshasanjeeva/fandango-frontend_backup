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

import Ticket from "./ticket";
import Realticket from "./realticket";

import history from "./History";
import Payments from "./Payments";
import Profile from "./Profile";
import myprofile from "./myprofile";
import Addmovies from "./Addmovies";
import adminLogin from "./admin/adminLogin";
import adminHome from "./admin/adminMovieHalls";
import ticket from "./ticket";
import addUser from "./admin/addUser";
import adminMainPage from "./admin/adminMainPage";
import BookTicket from "./BookTicket";

// import Tickets from "./Tickets";



import viewUsers from "./admin/viewUsers"


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
                    <Route  path='/Ticket' component={Ticket}/>
                    <Route  path='/payments' component={Payments}/>
                    <Route  path='/profile' component={Profile}/>

                    <Route  path='/realticket' component={Realticket}/>
                    <Route  path='/myprofile' component={myprofile}/>
                    <Route  path='/addmovies' component={Addmovies}/>

                    <Route  path='/addhall' component={Addhall}/>
                    <Route  path='/adminLogin' component={adminLogin}/>

                    <Route  path='/ticket' component={ticket}/>
                    <Route  path='/bookTicket' component={BookTicket}/>
                    <Route  path='/addUser' component={addUser}/>
                    <Route  path='/viewUsers' component={viewUsers}/>
                    <Route  path='/adminMainPage' component={adminMainPage}/>

                </Switch>
            </Router>
        );

    }
}
export default Routes;