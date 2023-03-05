import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from './reduxStore/actions';

const Carpenter = () => {
    //logout logic
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleLogout = () => {
      dispatch(logout());
      navigate('/');
    };
  return (
    <div>
      <h2>Carpenter Component</h2>
      <p>Carpenter homepage</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Carpenter;