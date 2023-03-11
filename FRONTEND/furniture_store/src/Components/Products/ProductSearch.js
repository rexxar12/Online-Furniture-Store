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

function ProductSearch() {
    const { state } = useLocation();
  const products = state.products || [];
  console.log(products);
  return (
    <MDBContainer fluid className="my-5">
      <MDBRow className="justify-content-center">
        <MDBCol md="3">
      {products.map((product) => (
        <div key={product.id}>
          <MDBCard className="text-black">
          <MDBCardImage src={`data:image/png;base64,${product.productImage}`} position="top" alt={product.pname} />
          <MDBCardBody >
          <div className="text-center">
          <MDBCardTitle>{product.pname}</MDBCardTitle>
          </div>

          <div>
          <div className="d-flex justify-content-between">
          <span>Description: </span>
          <span>{product.description}</span>
          </div>

          <div className="d-flex justify-content-between">
          <span>Seller: </span>
          <span>{product.seller.sname}</span>
          </div>
          </div>
          
          <div className="d-flex justify-content-between total font-weight-bold mt-4">
          <span>Category: </span>
          <span>{product.category.category}</span>
          </div>
          </MDBCardBody>
          </MDBCard>
        </div>
      ))}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default ProductSearch