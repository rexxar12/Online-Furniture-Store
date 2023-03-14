import React from 'react';
import Navbar from '../NavBar/Navigation';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Col, Row } from "react-bootstrap";
import { data } from "./data";
import './home.css'
import Services from './Services';
import ProductList from './ProductList/ProductList';

function Homepage() {

  if(sessionStorage.getItem("logged"!=="true")){
    sessionStorage.setItem("logged","false")
  }


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
    <Services/>



    </div>
    </>
  );
}

export default Homepage;



    // <div className="trending_products">
    //   <section>
    //   <Container>
    //     <Row>
    //       <Col lg="12" className="text-center">
    //       <h2>Trending Prodcuts</h2>
    //       <Row className='mt-5'>
    //           <ProductList data={data}/>
    //       </Row>
    //       </Col>
    //     </Row>
    //   </Container>
    //   </section>
    // </div>