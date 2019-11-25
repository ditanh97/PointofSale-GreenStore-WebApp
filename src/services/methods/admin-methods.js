// /*
// ENCAPSULATES ALL BACKEND API CALLS FOR PERFORMING CRUD OPERATIONS 
// ON ADMIN , LOGGING AND OUT OF THE APPLICATION*/
// import axios from 'axios';
// import {authHeader} from '../../helpers'

// export const adminMethod = {
//     login, 
//     logout,
//     getAllProducts,
// }


// function login(username, password) {
//     const request = {
//         username: username,
//         password: password
//     };

//     return axios.post('/',request)
//         .then(handleLogin)
//         .then((token) => {
//             localStorage.setItem('jwt', token);
//             localStorage.setItem('user', username);
            
//             return username, token
//         })
// }

// function logout(){
//     localStorage.removeItem('user');
//     localStorage.removeItem('jwt');
// }

// function handleLogin(response) {
//     // return response.data revisi lg
//     if (response.data.message === 401) {
//         logout();
//         location.reload(true)
//     }
//     return response.data.token;
// }


// function getAllProducts() {
//     const header = {
//         headers: authHeader()
//     };

//     return axios.get(process.env.GET_PRODUCTS_API, header)
//         .then(handleResponse);

// }


// function handleResponse(response) {
//     return response.data.result;
// }