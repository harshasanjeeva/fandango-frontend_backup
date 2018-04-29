import * as API from "../api/API";

export const LOGIN ="LOGIN";
export const SIGNUP ="SIGNUP";
export const BOOK ="BOOK";
export const EDIT_PROFILE ="EDIT_PROFILE";
export const DEL="DEL";

export const MOVIES ="MOVIES";
export const GETMOVIES ="GETMOVIES";
export const TICKET ="TICKET";
export const ADDMOVIES ="ADDMOVIES";
export const ADDHALL ="ADDHALL";
export const PAYMENT ="PAYMENT";
export const REAL ="REAL";

export const VIEW ="VIEW";
export const ADMINLOGIN ="ADMINLOGIN";
export const ADDUSERHALL="ADDUSERHALL";
export const GETMOVIEHALLS="GETMOVIEHALLS";
export const VIEWALLUSERS="VIEWALLUSERS";

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

}

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

}

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

}

export function book(data) {
    console.log(data);
    return {
        type: BOOK,
        message: "inside Signup Actions",
        data:data
    }
}

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
} 
catch (error) {
    console.log(error)
}
    }
}
export function editProfile2(resData) {

    console.log("PROJECT_DESC 2-->actions",resData);

    return {
        type: EDIT_PROFILE,
        msg:"Project edit",
        status:true,
        data:resData
    }

}

export function actionmovies(userdata) {
    console.log("in movies");
    return function (dispatch) {
            dispatch(movies(userdata))
        }
}

export function movies(data) {
    console.log(data);
    return {
        type: MOVIES,
        message: "inside Movies Actions",
        data:data
    }
}

export function actiongetmovies(userdata) {
    console.log("in get movies");
    console.log(userdata);
    
    return function (dispatch) {
        // try {
            API.getmovies(userdata)
                .then((response) => {
                    try {
                        console.log("inside 2nd try",response);
                        dispatch(getmovies(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        // }
        // catch (error) {

        //     console.log("eroor in getmovies",error);
        // }
    }

};

export function analytics(userdata){
    console.log("inside analytics action");
    return function (dispatch) {
        try {

            API.analytics(userdata)
                .then((response) => {
                    try {
                        console.log("inside analytics action");
                        // dispatch(loginAd(response));
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
}
export function getmovies(data) {
    console.log("data===> in actions",data);
    return {
        type: GETMOVIES,
        message: "inside GETMOVIES Actions",
        data:data
    }
}


export function actionAdminLogin(userdata) {
    console.log("in login");
    console.log(userdata);
    return function (dispatch) {
        try {

            API.doAdminLogin(userdata)
                .then((response) => {
                    try {
                        console.log("inside action");
                        dispatch(loginAd(response));
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

}

export function loginAd(data) {
    console.log("data in action==>",data.message);
    return {
        type: ADMINLOGIN,
        message: "inside login actions",
        data:data
    }
}









export function actionaddmovies(userdata) {
    console.log("in add movies");
    console.log(userdata);
    return function (dispatch) {
        try {

            API.moviesadd(userdata)
                .then((response) => {
                    try {
                        console.log("recieved response now dispatching to action");
                        dispatch(addmovies(response));
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
}

export function addmovies(data) {
    console.log(data);
    return {
        type: ADDMOVIES,
        message: "inside movie adding",
        data:data
    }
}


export function actionaddhall(userdata) {
    console.log("in add hall");
    console.log(userdata);
    return function (dispatch) {
        try {

            API.halladd(userdata)
                .then((response) => {
                    try {
                        console.log("recieved hall response now dispatching to actions");
                        dispatch(addhall(response));
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

}

export function addhall(data) {
    console.log(data);
    return {
        type: ADDHALL,
        message: "inside hall adding",
        data:data
    }
}
export function actionpayment(userdata) {
    console.log("in payment");
    console.log(userdata);
    return function (dispatch) {
        try {

            API.paid(userdata)
                .then((response) => {
                    try {
                        console.log("received hall response now dispatching to actions");
                        dispatch(paid(response));
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

}

export function paid(data) {
    console.log(data);
    return {
        type: PAYMENT,
        message: "inside payment data",
        data:data
    }
}

export function actionreal(userdata) {
    console.log("in action real");
    console.log(userdata);
    return function (dispatch) {
        try {

            API.real(userdata)
                .then((response) => {
                    try {
                        console.log("Received real ticket information");
                        dispatch(real(response));
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

}

    export function real(data) {
    console.log(data);
    return {
    type: REAL,
    message: "inside real ticket data",
    data:data
    }
}

export function addHall(hallData) {
    console.log("in payment");
    console.log(hallData);
    return function (dispatch) {
        try {

            API.addHallApi(hallData)
                .then((response) => {
                    try {
                        console.log("recieved hall response now dispatching to actions");
                        dispatch(addHallShort(response));
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

}
    export function addHallShort(data) {
    console.log(data);
    return {
    type: ADDHALL,
    message: "inside hall data",
    data:data
}
}


export function actiondel(userdata) {
            console.log("in action delete");
            console.log(userdata);
            return function (dispatch) {
            try {

            API.delprofile(userdata)
            .then((response) => {
            try {
            console.log("in delete try");
            dispatch(del(response));
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
        }

        export function del(data) {
            console.log(data);
            return {
            type: DEL,
            message: "inside delete data",
            data:data
        }
        }

export function addUserToHall(hallUserData) {
    console.log("in payment");
    console.log(hallUserData);
    return function (dispatch) {
        try {

            API.addUserToHall(hallUserData)
                .then((response) => {
                    try {
                        dispatch(addUserToHallP(response));
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

}

export function addUserToHallP(data) {
            console.log(data);
            return {
            type: ADDUSERHALL,
            message: "inside hall user data",
            data:data
        }
        }

export function actionview(userdata) {
    console.log("in action view profile");
    console.log(userdata);
    return function (dispatch) {
        try {

            API.viewprofile(userdata)
                .then((response) => {
                    try {
                        console.log("in view profile try");
                        dispatch(viewprofile(response));
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
}

            export function viewprofile(data) {
                    console.log(data);
                    return {
                    type: VIEW,
                    message: "inside viewprofile data",
                    data:data
                }
                }


export function getMovieHalls() {
    console.log("in payment");
    return function (dispatch) {
        try {

            API.getMovieHalls()
                .then((response) => {
                    try {
                        dispatch(getMovieHallsP(response));
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

}

 export function getMovieHallsP(data) {
                    console.log(data);
                    return {
                    type: GETMOVIEHALLS,
                    message: "inside hall user data",
                    data:data
                }
                }



export function viewAllUsers(data) {
    console.log("in view all users");
    return function (dispatch) {
        try {

            API.viewAllUsers(data)
                .then((response) => {
                    try {
                        dispatch(viewAllUsersP(response));
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

}

export function viewAllUsersP(data) {
    console.log(data);
    return {
        type: VIEWALLUSERS,
        message: "inside hall user data",
        data:data
    }
}