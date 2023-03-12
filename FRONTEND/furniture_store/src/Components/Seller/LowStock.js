import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MDBBadge, MDBTable, MDBTableHead, MDBTableBody, MDBContainer, MDBCard,MDBCardImage } from 'mdb-react-ui-kit';
import Order from './Order'
import Navbar from './Navigation/Navigation'


function LowStockProducts() {
  const [products, setProducts] = useState([]);
  const sellerId=sessionStorage.getItem("id")
  useEffect(() => {
    async function fetchProducts() {
      const response = await axios.get(`http://localhost:8080/products/seller/${sellerId}/products/low-stock`);
      setProducts(response.data);
    }
    fetchProducts();
  }, [sellerId]);

  return (
    <div>
    <Navbar/>
    <MDBContainer className='mt-5 mb-5'>
        <h1 className='heading mt-5 mb-5'>Low Stock Alert</h1>
    <MDBCard>
    <MDBTable>
      <MDBTableHead>
        <tr className='ms-5'>
          <th scope='col'><p>Image</p></th>
          <th scope='col'><p>Product Name</p></th>
          <th scope='col'><p>Stock </p></th>
          
          
          
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      {products.map(product => (
        
        <>
        <tr>
          <td>
          <MDBCardImage 
          src={`data:image/png;base64,${product.productImage}`} 
          fluid className="rounded-3" alt="Cotton T-shirt" style={{width:100, height:100}} />
          </td>
          <td>
            <div className='d-flex align-items-center'>
            
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{product.pid}</p>
                <p className='text-muted mb-0'>{product.pname}</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>{product.productDetails.stock}</p>
          </td>
          
      
          
        </tr>
        </>
        ))}
      </MDBTableBody>
    </MDBTable>
    </MDBCard>
    </MDBContainer>
    </div>
  );
}

export default LowStockProducts;
