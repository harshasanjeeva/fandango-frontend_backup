const api = process.env.REACT_APP_CONTACTS_API_URL ||'http://localhost:3001'
const headers = {
    'Accept': 'application/json'
};

export const doLogin = (payload) =>
    fetch(`${api}/operations/login`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log("message",response.message);
            console.log("after message");
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });
export const doAdminLogin = (payload) =>
    fetch(`${api}/operations/adminLogin`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log("message",response.message);
            console.log("after message");
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const signup = (payload) =>
    fetch(`${api}/operations/signup`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {

            console.log(response.UserName+" "+response.email);
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const booking = (payload) =>
    fetch(`${api}/operations/booking`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {

            console.log(response.UserName+" "+response.email);
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

       
export const editProfile = (payload) =>
    fetch(`${api}/operations/editprofile`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {

            console.log(response.UserName+" "+response.email);
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
});

export const ticketing = (payload) =>
    fetch(`${api}/operations/ticketing`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {

            console.log(response.UserName+" "+response.email);
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const getmovies = (payload) =>
    fetch(`${api}/operations/getmovies`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log("response in API",response)
            return response;
        })
        .catch(error => {
            console.log("This is error");

            return error;
        });


export const moviesadd = (payload) =>
    fetch(`${api}/operations/addmovies`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log("here in api myprojectDesc proposal"); 

            console.log(response.UserName+" "+response.email);
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });



export const analytics = (payload) =>
    fetch(`${api}/operations/analytics`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log("here in api myprojectDesc proposal"); 
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const halladd = (payload) =>
    fetch(`${api}/operations/addhall`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {

            console.log(response.UserName+" "+response.email);
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });




export const moviehalldata = (payload) =>
    fetch(`${api}/operations/getmoviehalldata`, {
    method: 'POST',
    headers: {
    ...headers,
    'Content-Type': 'application/json'
},
    body: JSON.stringify(payload)
}).then(response => response.json())
.then(response => {


    console.log(response.UserName+" "+response.email);

    console.log(payload);
    return response;
})
.catch(error => {
    console.log("This is error");
    return error;
});





export const paid = (payload) =>
    fetch(`${api}/operations/payment`, {

        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {


            console.log(response.UserName+" "+response.email);

            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });


export const moviedetailsedit = (payload) =>
    fetch(`${api}/operations/editmoviehalldata`, {

    method: 'POST',
    headers: {
    ...headers,
    'Content-Type': 'application/json'
},
    body: JSON.stringify(payload)
}).then(response => response.json())
.then(response => {


    console.log(response.UserName+" "+response.email);


    console.log(payload);
    return response;
})
.catch(error => {
    console.log("This is error");
    return error;
});


export const real = (payload) =>
    fetch(`${api}/operations/realticket`, {

        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {


            console.log(response.UserName+" "+response.email);


            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });


export const gethalldata = (payload) =>
    fetch(`${api}/operations/gethalldata`, {

    method: 'POST',
    headers: {
    ...headers,
    'Content-Type': 'application/json'
},
    body: JSON.stringify(payload)
}).then(response => response.json())
.then(response => {

    console.log("message",response.message);
    console.log("after message");


    console.log(payload);
    return response;
})
.catch(error => {
    console.log("This is error");
    return error;
});


export const addHallApi = (payload) =>
    fetch(`${api}/operations/addHall`, {

        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {

            console.log("message",response.message);
            console.log("after message");


            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });


export const userlogin = (payload) =>
    fetch(`${api}/operations/movieuserlogin`, {

    method: 'POST',
    headers: {
    ...headers,
    'Content-Type': 'application/json'
},
    body: JSON.stringify(payload)
}).then(response => response.json())
.then(response => {

    console.log("message",response.message);
    console.log("after message");

    console.log(payload);
    return response;
})
.catch(error => {
    console.log("This is error");
    return error;
});



export const addUserToHall = (payload) =>
    fetch(`${api}/operations/addUserToHall`, {

        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {

            console.log("message",response.message);
            console.log("after message");

            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });


export const moviedetailsadd = (payload) =>
    fetch(`${api}/operations/addmoviehalldata`, {
    method: 'POST',
    headers: {
    ...headers,
    'Content-Type': 'application/json'
},
    body: JSON.stringify(payload)
}).then(response => response.json())
.then(response => {


    console.log(response.UserName+" "+response.email);

    console.log(payload);
    return response;
})
.catch(error => {
    console.log("This is error");
    return error;
});



export const delprofile = (payload) =>
    fetch(`${api}/operations/delprofile`, {

        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {


            console.log(response.UserName+" "+response.email);

            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });



export const handlerevenue = (payload) =>
    fetch(`${api}/operations/revenuedetails`, {

    method: 'POST',
    headers: {
    ...headers,
    'Content-Type': 'application/json'
},
    body: JSON.stringify(payload)
}).then(response => response.json())
.then(response => {


    console.log(response.UserName+" "+response.email);

    console.log(payload);
    return response;
})
.catch(error => {
    console.log("This is error");
    return error;
});


export const getMovieHalls = (payload) =>
    fetch(`${api}/operations/getMovieHalls`, {

        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {


            console.log(response.UserName+" "+response.email);

            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

        
export const actiongetthreatre = (payload) =>
fetch(`${api}/operations/actiongetthreatre`, {
    method: 'POST',
    headers: {
        ...headers,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
}).then(response => response.json())
    .then(response => {
        console.log(payload);
        return response;
    })
    .catch(error => {
        console.log("This is error");
        return error;
    });





export const handlebooking = (payload) =>
    fetch(`${api}/operations/bookingdetails`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {

            console.log(response.UserName+" "+response.email);
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const bookingdelete = (payload) =>
    fetch(`${api}/operations/deletebooking`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });


export const viewprofile = (payload) =>
    fetch(`${api}/operations/viewprofile`, {
        method: 'POST',
        headers: {
        ...headers,
        'Content-Type': 'application/json'
    },
        body: JSON.stringify(payload)
    }).then(response => response.json())
    .then(response => {
        console.log(payload);
        return response;
    })
    .catch(error => {
        console.log("This is error");
        return error;
    });

export const viewAllUsers = (payload) =>
    fetch(`${api}/operations/viewAllUsers`, {

        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {


            console.log(response.UserName+" "+response.email);


            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const hallsanalytics = (payload) =>
    fetch(`${api}/operations/toprevenuehalls`, {

        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {


            console.log(response.UserName+" "+response.email);


            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });


export const moviesanalytics = (payload) =>
    fetch(`${api}/operations/toprevenuemovies`, {

        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {


            console.log(response.UserName+" "+response.email);


            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });



        export const getreviews = (payload) =>
        fetch(`${api}/operations/getreviews`, {
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(response => response.json())
            .then(response => {
                console.log("response in API",response)
                return response;
            })
            .catch(error => {
                console.log("This is error");
    
                return error;
            });
    
    export const subreviews = (payload) =>
        fetch(`${api}/operations/subreviews`, {
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(response => response.json())
            .then(response => {
                console.log("response in API",response)
                return response;
            })
            .catch(error => {
                console.log("This is error");
    
                return error;
            });
