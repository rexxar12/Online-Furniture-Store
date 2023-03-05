import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from './reduxStore/actions';

const Seller = () => {
    //logout logic
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleLogout = () => {
      dispatch(logout());
      navigate('/');
    };
  return (
    <div>
      <h2>Seller Component</h2>
      <p>Seller homepage</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Seller;