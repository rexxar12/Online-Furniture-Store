import React from "react";
import { useLocation } from 'react-router-dom';
import {  Col, Row,Button } from "react-bootstrap";
import './style.css';
import { MDBCardImage } from "mdb-react-ui-kit";

function ProductP() {
    const { state } = useLocation();
  const products = state.products || [];
  console.log(products);
  return (
    <Row className="item">
      <Col sm={6}>
        <div>
        <MDBCardImage src={`data:image/png;base64,${products.productImage}`} className="image"/>
        </div>
      </Col>
      <Col className="info">
        <h1>{products.pname}</h1>
        <p>{products.description}</p>
        <Row className="buttonRow">
          <Col>
            <p>Available Colors:</p>
        
          </Col>
          <Col style={{ textAlign: "right" }}>
            <p>Price: {products.price}</p>
            <a>
              <Button id="buy" variant="primary">
                Buy Now
              </Button>
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default ProductP