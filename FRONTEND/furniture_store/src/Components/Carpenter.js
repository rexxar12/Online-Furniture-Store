import React from "react";
import { useLocation } from 'react-router-dom';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";


function SearchResults() {
  const { state } = useLocation();
  const products = state.products || [];
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
    <MDBContainer fluid>
      <MDBRow className="justify-content-center mb-0">
        <MDBCol md="12" xl="10">
          <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
            <MDBCardBody>
              <MDBRow>
                <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom hover-overlay"
                  >
                    <MDBCardImage
                      src={`data:image/png;base64,${product.productImage}`} 
                      fluid
                      className="w-100"
                      alt={product.pname}
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                </MDBCol>
                <MDBCol md="6">
                  <h5>{product.pname}</h5>
                  <div className="d-flex flex-row">
                    <div className="text-danger mb-1 me-2">


                    <div>
                    {[...Array(product.rating)].map((_, i) => (
                        <MDBIcon fas icon="star" key={i} />
                        ))}
                    </div>
                    

                    </div>
                    <span>310</span>
                  </div>
                  <div className="mt-1 mb-0 text-muted small">
                    <span>{product.category.category}</span>
                    
                    
                  </div>
                  
                  <p className="text-truncate mb-4 mb-md-0">
                  {product.description}
                  </p>
                </MDBCol>
                <MDBCol
                  md="6"
                  lg="3"
                  className="border-sm-start-none border-start"
                >
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">₹{product.price}</h4>
                    <span className="text-danger">
                      <s>$20.99</s>
                    </span>
                  </div>
                  <h6 className="text-success">Free shipping</h6>
                  <div className="d-flex flex-column mt-4">
                    <MDBBtn color="primary" size="sm">
                      Details
                    </MDBBtn>
                    <MDBBtn outline color="primary" size="sm" className="mt-2">
                      Add to wish list
                    </MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
        ))}
    </div>
  );
}

export default SearchResults;