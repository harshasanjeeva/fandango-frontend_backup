import {LOGIN} from '../actions/loginactions';
import {SIGNUP} from '../actions/loginactions';
import {BOOK} from '../actions/loginactions';

const initialState = {
       
    "user":{
        "signupmsg": "",
        "signinmsg" :"",
        "basic":"harsha",
        "email": "ashwin@gmail.com",
        "login_status": false,
        "signup_status":false,
        "booking_status":false
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
                    "username":action.data.username,
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
                    "sign":action.data.status,
                    "email": action.data.email,
                    "booking_status":action.data.status
                }
            }
        default :
            return state;

    }
};

export default stores;

