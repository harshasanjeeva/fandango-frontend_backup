
import {
    EDITMOVIEHALLDATA, LOGIN, MOVIEHALLDATA, ADDMOVIEHALLDATA, REVENUEDATA, DELETEBOOKING,
    HALLGRAPH
} from '../actions/loginactions';
import {REAL} from '../actions/loginactions';
import {SIGNUP} from '../actions/loginactions';
import {BOOK} from '../actions/loginactions';
import {MOVIES} from '../actions/loginactions';
import {GETMOVIES} from '../actions/loginactions';
import {TICKET} from '../actions/loginactions';
import {ADDHALL} from '../actions/loginactions';
import {ADDMOVIES} from '../actions/loginactions';

import {MOVIEUSERLOGIN} from '../actions/loginactions';
import {BOOKINGDATA} from '../actions/loginactions';
import {SETSTATUS} from '../actions/loginactions';
import {HALLDATA} from '../actions/loginactions';
import {EDITSTATUS} from '../actions/loginactions';

import {PAYMENT} from '../actions/loginactions';
import {DEL} from '../actions/loginactions';
import {VIEW} from '../actions/loginactions';
import {ADMINLOGIN} from "../actions/loginactions";
import {ADDUSERHALL} from "../actions/loginactions";
import {GETMOVIEHALLS} from "../actions/loginactions";
import {VIEWALLUSERS} from "../actions/loginactions";
import {MOVIESGRAPH} from "../actions/loginactions";





const initialState = {
       
    "user":{
        "signupmsg": "",
        "signinmsg" :"",
        "basic":"harsha",
        "email": "ashwin@gmail.com",
        "login_status": false,
        "signup_status":false,
        "booking_status":false,
        "movieuserlogin_status": false,
        "editmoviedata_status" : false,
        "addmoviedata_status" : false,
        "hall_id": 0,
        "hall_name": '',
        "hall_address": '',
        "total_revenue": 0,
        "tax": 0,
        "final_value": 0,
        "delete_status": false

    }
};

const stores= (state = initialState, action) => {


    switch (action.type) {

        case LOGIN:
            console.log("im here in store");
            console.log("message",action.data.logi);
            console.log("username",action.data.email);
            console.log("status",action.data.status);
            return {
                ...state,
                "stores":{
                    "username":action.data.name,
                    "login_status":action.data.status,
                    "user_id":action.data.user_id
                }
            }
        case PAYMENT:
            console.log("im here in payment store");
            console.log("in payment ")
            console.log(action.data.status);
            console.log(stores)
            return {
                ...state,
                "stores":{

                    "payment_status":action.data.status
                }
            }
        case SIGNUP:
            console.log("im here in Signup store");
            console.log("in signup:")
            console.log(action.data.status);
            console.log("email",action.data.email);
            console.log(stores)
            return {
                ...state,
                "stores":{
                    "sign":action.data.status,
                    "email": action.data.email,
                    "signup_status":action.data.status
                }
            }

        case BOOK:
            console.log("im here in booking store");
            console.log("in booking:")
            console.log(action.data.status);
            console.log("email",action.data.email);
            console.log(stores)
            return {
                ...state,
                "stores":{
                    "sign":action.data.status,
                    "email": action.data.email,
                    "booking_status":action.data.status
                }
            }

        case MOVIES:
        console.log("im here in movies store");
        return {
            ...state,
            "booking":{
                "booking_data":action.data
            }
        }
        case GETMOVIES:
            console.log("im here in getmovies store");
            console.log(action.data);
            return {
                ...state,
                "movies": {
                    "movie_data": action.data
                }
            }

        case ADMINLOGIN:
            console.log("im here in movies store");
            return {
                ...state,
                "adminLogin": {
                    "admin_data": action.data
                }
            }


        case TICKET:
            console.log("im here in Ticket store");
            console.log("in booking:")
            console.log(action.data.status);
            console.log("email",action.data.email);
            console.log(stores)
            return {
                ...state,
                "stores":{

                    "ticket_status":action.data.status
                }
            }

        case ADDMOVIES:
        console.log("im here in add movies store");
        console.log("in add movies:")
        console.log("add movie status",action.data.status);
        console.log(stores)
        return {
            ...state,
            "stores":{

                "addmovie_status":action.data.status
            }
        }

        case GETMOVIEHALLS:
            console.log(stores)
            return {
                ...state,
                "movieHalls":{

                    "movieHalls":action.data
                }
            }

        case ADDHALL:
        console.log("im here in add hall store");
        console.log("in hall:")
        console.log(action.data.status);
        console.log(stores)
        return {
            ...state,
            "stores":{

                "addhall_status":action.data.status
            }
        }
        case PAYMENT:
            console.log("im here in payment store");
            console.log("in payment ")
            console.log(action.data.status);
            console.log(stores)
            return {
                ...state,
                "stores":{

                    "status":action.data.status
                }
            }

        case REAL:
            console.log("in real payment store")
            return {
                ...state,
                "realticket":{
                    "realticket":action.data.bill
                }
            }
        case DEL:
            console.log("in delete profile store")
            return {
                ...state,
                "stores":{
                    "status":action.data.status
                }
            }
            
        case VIEW:
            console.log("in view profile store")
            return {
                ...state,
                "editProfile":{
                    "editProfile":action.data.editProfile
                }
            }
        case ADDUSERHALL:
            console.log("im here in add hall user store");
            console.log("in user hall:")
            console.log(action.data.status);
            console.log(stores)
            return {
                ...state,
                "stores":{

                    "addHallUser":action.data.status
                }
            }
        case VIEWALLUSERS:
            console.log("im here in add hall user store");
            console.log("in user hall:")
            console.log(action.data.status);
            console.log(stores)
            return {
                ...state,
                "viewAllUsers":{

                    "viewAllUsers":action.data
                }
            }


        case MOVIEUSERLOGIN:
            console.log("im here in MOVIEUSERLOGIN store");
            console.log("hallId",action.data.hallId);
            console.log("hallname",action.data.hall_name);
            console.log("halladdress",action.data.hall_address);
            console.log("status",action.data.status);
            return {
                ...state,
                "stores":{
                    "movieuserlogin_status":action.data.status,
                    "hall_name": action.data.hall_name,
                    "hall_address": action.data.hall_address,
                    "hall_id": action.data.hallId
                }
            }


        case MOVIEHALLDATA:
            console.log("im here in store");
            console.log("message",action.data.logi);
            console.log("halldata",action.data.halldata);
            console.log("status",action.data.status);
            return {
                ...state,
                "halls": {
                    "hall_data": action.data
                }
            }

        case EDITMOVIEHALLDATA:
            console.log("im here in store");
            console.log("message",action.data.logi);
            console.log("halldata",action.data.halldata);
            console.log("status",action.data.status);
            return {
                ...state,
                "stores":{

                    "editmoviedata_status":action.data.status
                }
            }


        // case HALLDATA:
        //     console.log("im here in HALLDATA store");
        //     console.log("message",action.data.logi);
        //     console.log("hallname",action.data.hall_name);
        //     console.log("hall_address",action.data.hall_address);
        //     console.log("status",action.data.status);
        //     return {
        //         ...state,
        //         "stores":{
        //
        //             "hall_name":action.data.hall_name,
        //             "hall_address": action.data.hall_address
        //         }
        //     }


        case ADDMOVIEHALLDATA:
            console.log("im here in store");
            console.log("message",action.data.logi);
            console.log("halldata",action.data.halldata);
            console.log("status",action.data.status);
            return {
                ...state,
                "stores":{

                    "addmoviedata_status":action.data.status
                }
            }

        case REVENUEDATA:
            console.log("im here in revenuedata store");
            console.log("total",action.data.total_revenue);
            console.log("tax",action.data.tax);
            console.log("final",action.data.final);
            return {
                ...state,
                "stores":{

                    "total_revenue":action.data.total_revenue,
                    "tax":action.data.tax,
                    "final_value":action.data.final,


                }
            }


        case BOOKINGDATA:
            console.log("im here in BOOKINGDATA store");
            console.log("booking data",action.data.booking_data);

            return {
                ...state,
                "bookings":{

                    "book_data":action.data
                }
            }

        case DELETEBOOKING:
            console.log("im here in delete store");
            console.log("booking data",action.data.status);

            return {
                ...state,
                 "stores":{

                    "delete_status":action.data.status



    }
            }

        case SETSTATUS:
            console.log("im here in delete store");
            console.log("booking data",action.data);

            return {
                ...state,
                "stores":{

                    "movieuserlogin_status":action.data



                }
            }

        case EDITSTATUS:
            console.log("im here in delete store");
            console.log("booking data",action.data);

            return {
                ...state,
                "stores":{

                    "editmoviedata_status":action.data



                }
            }

        case HALLGRAPH:
            console.log("im here in hall graph store");
            console.log("halls_list data",action.data.halls_list);
            console.log("revenue_list data",action.data.revenue_list);

            return {
                ...state,
                "graph1":{

                    "halls_list":action.data.halls_list,
                    "revenue_list":action.data.revenue_list
                }
            }

        case MOVIESGRAPH:
            console.log("im here in hall graph store");
            console.log("movies_list data",action.data.movies_list);
            console.log("revenue_list data",action.data.revenue_list);

            return {
                ...state,
                "graph2":{

                    "movies_list":action.data.movies_list,
                    "revenue_list":action.data.revenue_list
                }
            }


        default :
            return state;

    }
};

export default stores;

