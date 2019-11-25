/*
Returns an HTTP Authorization header 
contain JSON Web Token (JWT) of the currently logged in user from local storage
if the user isn't logged in an empty object is returned

https://jasonwatmore.com/post/2017/12/07/react-redux-jwt-authentication-tutorial-example#auth-header-js
*/

export function authHeader() {
    let user = localStorage.getItem('user');
    let jwt = localStorage.getItem('jwt');

    if (user && jwt) {
        return {"authorization" : jwt};
          // return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}