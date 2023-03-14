import React from "react";
import { useLocation } from 'react-router-dom';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
} from "mdb-react-ui-kit";
import './Product.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';





function ProductSearch() {
    const { state } = useLocation();
  const products = state.products || [];
  console.log(products);
  const navigate = useNavigate();

  const handleSearch = async (productName) => {
    try {
      let response = await axios.get(`http://localhost:8080/products/p/search?productName=${productName}`);
      if (response.data) {
        navigate(`/product-details?productName=${productName}`, { state: { products: response.data } });
      } 
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <MDBContainer fluid className="my-5">
      <MDBRow className="justify-content-center">
        <MDBCol xs={8} >
        </MDBCol>
      {products.map((product) => (
        <MDBCol xs={8} md={3}>
          <button className="btn bg-transparent" onClick={() => handleSearch(product.pname)}>
        <div key={product.id}>
          <MDBCard className="text-black">
          <MDBCardImage src={`data:image/png;base64,${product.productImage}`} position="top" alt={product.pname} 
          className='card-image'/>
          <MDBCardBody >
          <div className="text-center">
          <MDBCardTitle>{product.pname}</MDBCardTitle>
          </div>

          <div>
          <div className="">
          <span>Description: </span>
          <span>{product.description}</span>
          </div>

          <div className="">
          <span>Seller: </span>
          <span>{product.seller.sname}</span>
          </div>
          </div>
          
          <div className="">
          <span>Category: </span>
          <span>{product.category.category}</span>
          </div>
          </MDBCardBody>
          </MDBCard>
        </div>
        </button>
        </MDBCol>
      ))}
      </MDBRow>
    </MDBContainer>
  )
}

export default ProductSearch