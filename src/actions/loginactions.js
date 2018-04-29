import * as API from "../api/API";

export const LOGIN ="LOGIN";
export const SIGNUP ="SIGNUP";
export const BOOK ="BOOK";
export const EDIT_PROFILE ="EDIT_PROFILE";




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
} 
catch (error) {
    console.log(error)
}
    }
};

export function actionmovies(userdata) {
    console.log("in movies");
    return function (dispatch) {
            dispatch(movies(userdata))
        }
};

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


export function getmoviesall(data) {
    console.log("data===> in actions",data);
    return {
        type: GETMOVIES,
        message: "inside GETMOVIES Actions",
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

};

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

};

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

export function movieuserlogin(data) {
    console.log("data in action==>",data.message);
    return {
        type: MOVIEUSERLOGIN,
        message: "inside movie user login actions",
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
        data:false
    }
}