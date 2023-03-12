
import './NavBarStyles.css'
import React, { useEffect, useRef,useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { logout } from '../../reduxStore/actions';


function ColorSchemesExample() {

  //logout logic
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    
    const hist=window.history.state;
    window.history.replaceState(hist,"","/");
    dispatch(logout());
    navigate('/');
    
  };

  const [sellers, setSellers] = useState([]);
    const [status, setStatus] = useState(0);
    
    useEffect(() => {
        getSellersByStatus(status);
    }, [status]);
    
    const getSellersByStatus = (status) => {
        axios.get(`http://localhost:8080/api/sellers/status/${status}`)
            .then(res => {
                setSellers(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    };


 
  return (
<nav className="navbar navbar-expand-lg white NavbarItems">
  
  <div className="container-fluid">
    
    

  <h1 className="logo">OFS</h1>
  <div className="container">
    
    <div className="row">
        <div className="col-12">
        <div className="container h-100">
      <div className="d-flex justify-content-left h-100">
      </div>
    </div>


        </div>
    </div>
</div>


    <div className="collapse navbar-collapse" id="navbarRightAlignExample">
      
      <ul className=" mb-2 nav-menu">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/seller">Dashboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/lowstock">Stock Management</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/seller/add-product">Add Product</a>
        </li>
        <li className="nav-item">
        <a className="nav-link logout" aria-current="page"><Button variant="dark" onClick={handleLogout}>Logout</Button></a>
        </li>
        
      </ul>
      
    </div>
    
  </div>
  
</nav>
  );
}

export default ColorSchemesExample;
