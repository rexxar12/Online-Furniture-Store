
import './NavBarStyles.css'
import React, { useEffect, useRef,useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ColorSchemesExample() {
  //searchbox logic
  const [categoryName, setCategoryName] = useState('');
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8080/products/search?categoryName=${categoryName}`);
      console.log("search block")
      navigate(`/product-search?categoryName=${categoryName}`, { state: { products: response.data } });
    } catch (error) {
      console.log(error);
    }
  }
  return (
<nav className="navbar navbar-expand-lg white NavbarItems">
  
  <div className="container-fluid">
    
    

  <h1 className="logo">OFS</h1>
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
      
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-menu">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/customer/home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href=""></a>
        </li>
        
      </ul>
      
    </div>
    
  </div>
  
</nav>
  );
}

export default ColorSchemesExample;
