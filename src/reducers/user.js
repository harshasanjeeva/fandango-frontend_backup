import {LOGIN} from '../actions/loginactions';
import {SIGNUP} from '../actions/loginactions';
import {BOOK} from '../actions/loginactions';
import {MOVIES} from '../actions/loginactions';
import {GETMOVIES} from '../actions/loginactions';
import {TICKET} from '../actions/loginactions';
import {ADDHALL} from '../actions/loginactions';
import {ADDMOVIES} from '../actions/loginactions';
import {PAYMENT} from '../actions/loginactions';
const initialState = {
       
    "user":{
        "signupmsg": "",
        "signinmsg" :"",
        "basic":"harsha",
        "email": "ashwin@gmail.com",
        "login_status": false,
        "signup_status":false,
        "booking_status":false,
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
            console.log("im here in movies store");
            return {
                ...state,
                "movies": {
                    "movie_data": action.data
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
        default :
            return state;

    }
};

export default stores;

