import * as API from "../api/API";

export const LOGIN ="LOGIN";
export const SIGNUP ="SIGNUP";
export const BOOK ="BOOK";
export const EDIT_PROFILE ="EDIT_PROFILE";





export function actionlogin(userdata) {
    console.log("in login");
    console.log(userdata);
    return function (dispatch) {
        try {

            API.doLogin(userdata)
                .then((response) => {
                    try {
                        console.log("inside action");
                        dispatch(login(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }

};

export function login(data) {
    console.log("data in action==>",data.message);
    return {
        type: LOGIN,
        message: "inside login actions",
        data:data
    }
}


export function actionsign(userdata) {
    console.log("in signup");
    return function (dispatch) {
        try {

            API.signup(userdata)
                .then((response) => {
                    try {
                        console.log("inside 2nd try");
                        dispatch(Signup(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }

};

export function Signup(data) {
    console.log(data);
    return {
        type: SIGNUP,
        message: "inside Signup Actions",
        data:data
    }
}




export function actionbook(userdata) {
    console.log("in booking");
    console.log(userdata);
    return function (dispatch) {
        try {

            API.booking(userdata)
                .then((response) => {
                    try {
                        console.log("inside 2nd try");
                        dispatch(book(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }

};

export function book(data) {
    console.log(data);
    return {
        type: BOOK,
        message: "inside Signup Actions",
        data:data
    }
}


//==================editProfile==============start
export function editProfile(userDeails) {
    console.log("in myprojectDesc-->",userDeails);
    return function(dispatch){
        try {
        API.editProfile(userDeails)
        .then((response) => {
            try {
                console.log("in myprojectDesc 2");
                dispatch(editProfile2(response));
        }
        catch(error){
console.log(error)
        }
        });
} catch (error) {
    console.log(error)
}
    }

};


export function editProfile2(resData) {
    
    console.log("PROJECT_DESC 2-->actions",resData)
        
    return {
            type: EDIT_PROFILE,
            msg:"Project edit",
            status:true,
            data:resData
        }
        
}

//==================editProfile==============start


