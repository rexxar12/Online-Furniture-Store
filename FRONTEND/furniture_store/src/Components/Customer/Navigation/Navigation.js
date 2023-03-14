
import './NavBarStyles.css'
import React, { useEffect, useRef,useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { logout } from '../../reduxStore/actions';
import Logo from '../../Customer/Navigation/logo.png';



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




  //searchbox logic
  const [categoryName, setCategoryName] = useState('');
  

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      // First, search by categoryName
      let response = await axios.get(`http://localhost:8080/products/c/search?categoryName=${categoryName}`);
      console.log("search block")
      if (response.data.length > 0) {
        console.log("searching category")
        navigate(`/product-search?categoryName=${categoryName}`, { state: { products: response.data } });
      } else {
        // If no products are found by categoryName, search by productName
        response = await axios.get(`http://localhost:8080/products/p/search?productName=${categoryName}`);
        console.log("searching products")
        if (response.data) {
          console.log("searching products")
          
          navigate(`/product-details?productName=${categoryName}`, { state: { products: response.data } });
        } else {
          navigate('/searchfailed');
          console.log("No products found");
        }
      }
    } catch (error) {
      console.log(error);
      navigate('/searchfailed');
    }
  }
  return (
<nav className="navbar navbar-expand-lg white NavbarItems">
  
  <div className="container-fluid">
    
    

  <img src={Logo}/>
  <div className="container">
    
    <div className="row">
        <div className="col-12">
        <div className="container h-100">
      <div className="d-flex justify-content-left h-100">
    <form onSubmit={handleSearch}>
        <div className="searchbar">
          <input className="search_input" type="text" value={categoryName} onChange={(event) => setCategoryName(event.target.value)} placeholder="Search Products..."/>
          <button type='submit' className="search_icon"><i className="fas fa-search"></i></button>
        </div>
        </form>
      </div>
    </div>


        </div>
    </div>
</div>


    <div className="collapse navbar-collapse" id="navbarRightAlignExample">
      
      <ul className=" mb-2 nav-menu">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/customer/home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/customer/orders">Orders</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/catalog">Catalog</a>
        </li>
        <li className="nav-item">
        <a className="nav-link logout" aria-current="page" href="/cart"><i class="fa-solid fa-cart-shopping"></i></a>
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
