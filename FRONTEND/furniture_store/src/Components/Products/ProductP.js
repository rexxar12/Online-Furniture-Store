import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import {  Col, Row,Button, Container } from "react-bootstrap";
import './style.css';
import { MDBCardImage, MDBCardText,MDBIcon} from "mdb-react-ui-kit";
import Btn from '../Customer/AddCart/AddToCart'


function ProductP() {
  const { state } = useLocation();
  const products = state.products || [];

  const [woodType, setWoodType] = useState('');

  const handleWoodTypeChange = (event) => {
    setWoodType(event.target.value);
    console.log(event.target.value);
  }
  console.log(products);
  return (
    <div className="app">
      
        
            <div className="details" >
              <div className="big-img">
              <MDBCardImage src={`data:image/png;base64,${products.productImage}`} className="image"/>
              <MDBCardText tag="a" href="/customer/home" className="text-body">
                                <MDBIcon fas icon="long-arrow-alt-left mt-5" /> Back
                                to shop
                              </MDBCardText>
              </div>
              
              <div className="box">
                <div className="row">
                  <h2>{products.pname}</h2>
                  <span>Rs. {products.productDetails.price}</span>
                </div>
                

                <p>{products.description} IFEJKDFHJDKFH JAF HAJKDF HADJKF HDAJKFH EDKJF HDAJKF HDAKJF HEAJF HDAKJF HJDAKFH DAKJF HJDAKF HAKDJF HAKJFH AKJDF H</p>
                <p></p>
                
                <div>
                <select value={woodType} onChange={handleWoodTypeChange} class="selectpicker" data-size="4">
		            <option value="">Select Wood Type</option>
								<option value="Teak">Teak</option>
								<option value="Mahogany">Mahogany</option>
								<option value="Rose_Wood">Rose Wood</option>
								<option value="Satin_Wood">Satin Wood</option>
								<option value="Sal_Wood">Sal Wood</option>
								<option value="Deodar_Wood">Deodar Wood</option>
	              </select>
                </div>


                {woodType === '' && <p className="text-danger">Please select a wood type.</p>}

                  {woodType !== '' ? (
                    <button className="cart">
                      <Btn itemName={products.pname} className="addtocart" woodType={woodType} />
                    </button>
                  ) : null}
                <p>Dimensions: {products.productDetails.length}L X {products.productDetails.width}W X {products.productDetails.height}H</p>
                <p>Brand Name: {products.seller.sname}</p>
                {products.category.category === "Chair" ? <p>Care: Wipe clean with a damp cloth.</p> : null}

              </div>
            </div>
      </div>
  )
}

export default ProductP