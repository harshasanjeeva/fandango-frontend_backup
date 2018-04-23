const api = 'http://ec2-13-59-81-89.us-east-2.compute.amazonaws.com:3000'

const headers = {
    'Accept': 'application/json'
};

export const doLogin = (payload) =>
    fetch(`${api}/users/login`, {
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
    fetch(`${api}/users/register`, {
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
    fetch(`${api}/users/booking`, {
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