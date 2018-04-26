import {LOGIN} from '../actions/loginactions';
import {SIGNUP} from '../actions/loginactions';
import {BOOK} from '../actions/loginactions';
import {TICKET} from '../actions/loginactions';
import {ADDMOVIES} from '../actions/loginactions';
import {ADDHALL} from '../actions/loginactions';

const initialState = {
       
    "user":{
        "signupmsg": "",
        "signinmsg" :"",
        "basic":"harsha",
        "email": "ashwin@gmail.com",
        "login_status": false,
        "signup_status":false,
        "booking_status":false,
        "ticket_status":false,
        "addmovie_status":false,
        "addhall_status":false,
        "movie_id":0
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
                    "username":action.data.user_id,
                    "info":action.data.logi,
                    "login_status":action.data.status
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

                    "booking_status":action.data.status
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
            console.log("in booking:")
            console.log(action.data.status);
            console.log("email",action.data.email);
            console.log(stores)
            return {
                ...state,
                "stores":{

                    "addmovie_status":action.data.status,
                    "movie_id": action.data.movie_id
                }
            }

        case ADDHALL:
            console.log("im here in add hall store");
            console.log("in hall:")
            console.log(action.data.status);
            console.log("email",action.data.email);
            console.log(stores)
            return {
                ...state,
                "stores":{

                    "addhall_status":action.data.status,
                    "movie_id": action.data.movie_id
                }
            }

        default :
            return state;

    }
};

export default stores;

