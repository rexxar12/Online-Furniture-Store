export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const STORE_ID = 'STORE_ID';

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  };
};

export const loginSuccess = (userRole) => {
  return {
    type: LOGIN_SUCCESS,
    payload: userRole,
    
  };
};
export const storeId = (id) => {
  return {
    type: STORE_ID,
    payload: id
  };
};

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error
  };
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};
