import React from 'react';
import Navbar from '../NavBar/Navigation';
import Carousel from 'react-bootstrap/Carousel';

import './home.css'



function Homepage() {
  return (
    <>
    <Navbar/>
    <div className='below-nav'>
    <div>
      <Carousel className='align-items-center justify-content-center carousel '>
      <Carousel.Item>
        <a href='/products'>
        <img
          className="d-block w-100 carousel"
          src={require("./Images/banner1.jpg")}
          alt="First slide"
        />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src={require("./Images/banner3.png")}
          alt="Third slide"
        />
        </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src={require("./Images/banner4.png")}
          alt="Third slide"
        />
        </Carousel.Item>
      </Carousel>
    </div>
    </div>
    </>
  );
}

export default Homepage;


