// src/utils/auth.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import store from '../Components/reduxStore/store'

export function requireAuth(Component) {
  function Authenticated(props) {
    const isAuthenticated = store.getState().userLoggedIn;

    if (isAuthenticated) {
      return <Navigate to="/login" />;
    }

    return <Component {...props} />;
  }

  return Authenticated;
}
