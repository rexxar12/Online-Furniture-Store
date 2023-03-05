import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from './reduxStore/actions';

const Customer = () => {
    //logout logic
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleLogout = () => {
      dispatch(logout());
      navigate('/');
    };
  return (
    <div>
      <h2>Customer Component</h2>
      <p>Customer homepage </p>
    </div>
  );
}

export default Customer;