import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from './reduxStore/actions';
import userLoggedIn from './reduxStore/store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const Admin = () => {

  //logout logic
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    
    const hist=window.history.state;
    window.history.replaceState(hist,"","/");
    dispatch(logout());
    navigate('/');
    
  };

  return (
    <div>
      <h2>Admin Component</h2>
      <p>Admin homepage yo</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Admin;
