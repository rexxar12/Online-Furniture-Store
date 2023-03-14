import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBIcon,
} from "mdb-react-ui-kit";
import './style.css'

function ProductSearch({category}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const searchProducts = async () => {
      try {
        // First, search by categoryName
        let response = await axios.get(`http://localhost:8080/products/c/search?categoryName=${category}`);
        console.log({category});
        if (response.data.length > 0) {
          console.log("searching category")
          setProducts(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    }
  
    searchProducts();
  }, []);
  

  return (
    
    <MDBContainer fluid className="my-5">
      
      <MDBRow className="justify-content-center">
      {products.map((product) => (
        <MDBCol md="6">
          <MDBCard className="text-black">
            <MDBCardImage
              src={`data:image/jpg;base64,${product.productImage}`}
              position="top"
              className='card-image'
            />
            <MDBCardBody>
              <div className="text-center">
                <MDBCardTitle>{product.pname}</MDBCardTitle>
                <p className="text-muted mb-4"></p>
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <span>Price: </span>
                  <span>Rs. {product.price}</span>
                </div>
                <div className="d-flex justify-content-between">
                <span>Stock:</span>
{product.stock === "In Stock" ? <span>Available</span> : <span style={{color: 'red'}}>Out of Stock</span>}

                  </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
          ))}
      </MDBRow>
    </MDBContainer>
  );
}

export default ProductSearch;
