import { createStore } from 'redux';

const initialState = {
  userLoggedIn: false,
  userRole: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        userLoggedIn: true,
        userRole: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        userLoggedIn: false,
        userRole: '',
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
