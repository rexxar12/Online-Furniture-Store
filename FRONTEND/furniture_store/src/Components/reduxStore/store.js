import { createStore } from 'redux';

const initialState = {
  userLoggedIn: false,
  userRole: '',
  id: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      sessionStorage.setItem("logged","true");
      return {
        ...state,
        userLoggedIn: true,
        userRole: action.payload,

      };

      case 'STORE_ID':
        return{
          ...state,
          id: action.payload,
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
