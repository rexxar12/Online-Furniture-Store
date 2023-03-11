
import './NavBarStyles.css'
import Lottie from 'react-lottie-player'
import cat from './cat.json'
import React, { useEffect, useRef,useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ColorSchemesExample() {
  const animationRef = useRef(null);

  const anim = animationRef.current;
  useEffect(() => {
    if (anim) {
      anim.addEventListener('mouseenter', () => {
        anim.play();
      });
      anim.addEventListener('mouseleave', () => {
        anim.setDirection(-1);
        anim.play();
      });
      anim.addEventListener('complete', () => {
        anim.setDirection(1);
      });
    }
    return () => {
      const anim = animationRef.current;
      if (anim) {
        anim.removeEventListener('mouseenter');
        anim.removeEventListener('mouseleave');
        anim.removeEventListener('complete');
      }
    };
  }, []);
  


  //searchbox logic
  const [categoryName, setCategoryName] = useState('');
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      // First, search by categoryName
      let response = await axios.get(`http://localhost:8080/products/c/search?categoryName=${categoryName}`);
      console.log("search block")
      if (response.data.length > 0) {
        navigate(`/product-search?categoryName=${categoryName}`, { state: { products: response.data } });
      } else {
        // If no products are found by categoryName, search by productName
        response = await axios.get(`http://localhost:8080/products/p/search?productName=${categoryName}`);
        if (response.data) {
          navigate(`/product-details?productName=${categoryName}`, { state: { products: response.data } });
        } else {
          // If no products are found by productName, display an error message
          console.log("No products found");
        }
      }
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
          <a className="nav-link " aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">Login</a>
        </li>
        <li onMouseEnter={() => {
              animationRef.current.play();
            }}
            onMouseLeave={() => {
              animationRef.current.setDirection(-1);
              animationRef.current.play();
            }} >
              <a href="/reg">
        <Lottie
              loop={false}
              autoPlay={false}
              animationData={cat}
              style={{ width: 140, height: 80 }}
              ref={animationRef}
              className='icon'
            />
          </a>
        </li>
      </ul>
      
    </div>
    
  </div>
  
</nav>
  );
}

export default ColorSchemesExample;
