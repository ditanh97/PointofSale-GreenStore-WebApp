const initialState = {
    adminList: [],
    isRegistered: false,
    isLogin: false,
    isRejected: false,
    isLogout: false,
  };
  
  const admin = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_REJECTED':
        return {
          ...state,
          isLogin: false,
          isRejected: true,
        };
      case 'LOGIN_FULFILLED':
        state.adminList.push (action.payload.data);
        localStorage.setItem('jwt', action.payload.data.token);
        localStorage.setItem('user', action.payload.data.username);
        return {
          ...state,
          isLogin: true,
          isRejected: false,
          adminList: state.adminList,
        };
      case 'REGISTER_REJECTED':
        return {
          ...state,
          isRegistered: false,
          isRejected: true,
        };
      case 'REGISTER_FULFILLED':
        state.adminList.push (action.payload.data.result);
        return {
          ...state,
          isRejected: false,
          isRegistered: true,
          adminList: state.adminList,
        };
      case 'LOGOUT_FULFILLED':
        localStorage.removeItem('user');
        localStorage.removeItem('jwt');
        return {
          ...state,
          isLogout:true,
        };
      default:
        return state;
    }
  };
  
  export default admin;