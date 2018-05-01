import * as API from "../api/API";
export const SIGNOUT ="SIGNOUT";
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
export const MOVIEUSERLOGIN = "MOVIEUSERLOGIN";
export const MOVIEHALLDATA = "MOVIEHALLDATA";
export const EDITMOVIEHALLDATA = "EDITMOVIEHALLDATA";
export const HALLDATA = "HALLDATA";
export const ADDMOVIEHALLDATA = "ADDMOVIEHALLDATA";
export const REVENUEDATA = "REVENUEDATA";
export const BOOKINGDATA = "BOOKINGDATA";
export const DELETEBOOKING = "DELETEBOOKING";
export const SETSTATUS = "DELETEBOOKING";
export const EDITSTATUS = "DELETEBOOKING";
export const PAYMENT ="PAYMENT";
export const REAL ="REAL";
export const VIEW ="VIEW";
export const ADMINLOGIN ="ADMINLOGIN";
export const ADDUSERHALL="ADDUSERHALL";
export const GETMOVIEHALLS="GETMOVIEHALLS";
export const VIEWALLUSERS="VIEWALLUSERS";
export const REVIEWS="REVIEWS";
export const SUBMITREVIEWS="SUBMITREVIEWS";
export const HALLGRAPH = "HALLGRAPH";
export const MOVIESGRAPH = "MOVIESGRAPH";
export const ACTIONGETTHREATRE = "ACTIONGETTHREATRE";



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
                        dispatch(getmoviesall(response));
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




export function actiongetthreatre(userdata) {
    console.log("in get movies");
    console.log(userdata);
    
    return function (dispatch) {
   
            API.actiongetthreatre(userdata)
                .then((response) => {
                    try {
                        console.log("inside 2nd try",response);
                        dispatch(actiongetthreatre2(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });

    }

};




export function actiongetthreatre2(data) {
    console.log("data in action==>",data.message);
    return {
        type: ACTIONGETTHREATRE,
        message: "inside login actions",
        data:data
    }
}









export function analytics(userdata) {
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


//==================editProfile==============start


export function getmoviesall(data) {
    console.log("data===> in actions",data);
    return {
    type: GETMOVIES,
    message: "inside GETMOVIES Actions",
    data:data
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



export function actionmovieuserlogin(userdata) {
    console.log("in login");
    console.log(userdata);
    return function (dispatch) {
    try {
    API.userlogin(userdata)
    .then((response) => {
    try {
    console.log("inside action");
    dispatch(movieuserlogin(response));
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
};

export function movieuserlogin(data) {
    console.log("data in action==>",data.message);
    return {
        type: MOVIEUSERLOGIN,
        message: "inside movie user login actions",
        data:data
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



export function actiongetmoviehall(userdata) {
    console.log("in get movie hall data");
    console.log(userdata);
    return function (dispatch) {
    try {
    API.moviehalldata(userdata)
    .then((response) => {
    try {
    console.log("recieved response now dispatching to action");
    dispatch(getmoviehall(response));
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
};

export function getmoviehall(data) {
    console.log(data);
    return {
        type: MOVIEHALLDATA,
        message: "inside movie hall data",
        data:data
    }
}



export function actioneditmoviedetails(userdata) {
    console.log("in edit movie hall data");
    console.log(userdata);
    return function (dispatch) {
        try {

            API.moviedetailsedit(userdata)
                .then((response) => {
                    try {
                        console.log("recieved response now dispatching to action");
                        dispatch(editmoviedetails(response));
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

};

export function editmoviedetails(data) {
    console.log(data);
    return {
        type: EDITMOVIEHALLDATA,
        message: "inside edit movie hall data",
        data:data
    }
}


export function actiongethalls(userdata) {
    console.log("in get movie hall data");
    console.log(userdata);
    return function (dispatch) {
        try {

            API.gethalldata(userdata)
                .then((response) => {
                    try {
                        console.log("recieved response now dispatching to action");
                        dispatch(gethall(response));
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

export function gethall(data) {
    console.log(data);
    return {
        type: HALLDATA,
        message: "inside  hall data",
        data:data
    }
}


export function actionaddmoviedetails(userdata) {
    console.log("in edit movie hall data");
    console.log(userdata);
    return function (dispatch) {
        try {

            API.moviedetailsadd(userdata)
                .then((response) => {
                    try {
                        console.log("recieved response now dispatching to action");
                        dispatch(addmoviedetails(response));
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
};

export function addmoviedetails(data) {
    console.log(data);
    return {
        type: ADDMOVIEHALLDATA,
        message: "inside add movie hall data",
        data:data
    }
}


export function actionrevenuedetails(userdata) {
    console.log("in edit movie hall data");
    console.log(userdata);
    return function (dispatch) {
        try {
            API.handlerevenue(userdata)
                .then((response) => {
                    try {
                        console.log("recieved response now dispatching to action");
                        dispatch(revenuedetails(response));

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

};

export function revenuedetails(data) {
    console.log(data);
    return {
        type: REVENUEDATA,
        message: "inside add movie hall data",
        data:data
    }
}





export function actionbookingdetails(userdata) {
    console.log("in get booking details");
    console.log(userdata);
    return function (dispatch) {
        try {

            API.handlebooking(userdata)
                .then((response) => {
                    try {
                        console.log("recieved response now dispatching to action");
                        dispatch(bookingdetails(response));
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
};

export function bookingdetails(data) {
    console.log(data);
    return {
        type: BOOKINGDATA,
        message: "inside add movie hall data",
        data:data
    }
}


export function actiondeletebooking(userdata) {
    console.log("in get booking details");
    console.log(userdata);
    return function (dispatch) {
        try {

            API.bookingdelete(userdata)
                .then((response) => {
                    try {
                        console.log("recieved response now dispatching to action");
                        dispatch(deletebooking(response));
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
};

export function deletebooking(data) {
    console.log(data);
    return {
        type: DELETEBOOKING,
        message: "inside add movie hall data",
        data:data
    }
}

export function setstatus(data) {
    console.log(data);
    return {
        type: SETSTATUS,
        message: "inside add movie hall data",
        data:false
    }
}


export function editstatus(data) {
    console.log(data);
    return {
        type: EDITSTATUS,
        message: "inside add movie hall data",
        data: false
    }
}

export function signout(data) {
    console.log(data);
    return {
        type: SIGNOUT,
        message: "inside signout",
        data: false
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


export function actiongetanalyticshalls(userdata) {
    console.log("in get movie hall data");
    console.log(userdata);
    return function (dispatch) {
        try {

            API.hallsanalytics(userdata)
                .then((response) => {
                    try {
                        console.log("recieved response now dispatching to action");
                        dispatch(analyticshalls(response));
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

export function analyticshalls(data) {
    console.log(data);
    return {
        type: HALLGRAPH,
        message: "inside  hall data",
        data:data
    }
}



export function actiongetanalyticsmovies(userdata) {
    console.log("in get movie hall data");
    console.log(userdata);
    return function (dispatch) {
        try {

            API.moviesanalytics(userdata)
                .then((response) => {
                    try {
                        console.log("recieved response now dispatching to action");
                        dispatch(analyticsmovies(response));
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

export function analyticsmovies(data) {
    console.log(data);
    return {
        type: MOVIESGRAPH,
        message: "inside  hall data",
        data:data
    }
}


export function actiongetreviews(data) {
    console.log("in action get reviews");
    return function (dispatch) {
        try {

            API.getreviews(data)
                .then((response) => {
                    try {
                        dispatch(getreviews(response));
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

export function getreviews(data) {
    console.log(data);
    return {
        type: REVIEWS,
        message: "inside getreviews data",
        data:data
    }
}

export function actionsubmitreviews(data) {
    console.log("in action submit reviews");
    return function (dispatch) {
        try {

            API.subreviews(data)
                .then((response) => {
                    try {
                        dispatch(submitreviews(response));
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

export function submitreviews(data) {
    console.log(data);
    return {
        type: SUBMITREVIEWS,
        message: "inside submitreviews data",
        data:data
    }
}