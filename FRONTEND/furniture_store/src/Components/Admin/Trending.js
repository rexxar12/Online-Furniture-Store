import React, { useState, useEffect } from "react";
import axios from "axios";
import { MDBCardImage, MDBTable, MDBTableHead, MDBTableBody, MDBContainer, MDBCard } from 'mdb-react-ui-kit';
import Navbar from './Navigation/Navigation'
function TrendingProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/products/trendingProducts")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
        <Navbar/>
    <MDBContainer>
        <h1 className='heading mt-5 mb-5'>Trending Products</h1>
    <MDBCard>
    <MDBTable>
      <MDBTableHead>
        <tr className='ms-5'>
          <th scope='col'><p>No.</p></th>
          <th scope='col'><p>Image</p></th>
          <th scope='col'><p>Name</p></th>
          <th scope='col'><p>Price</p></th>
          
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      {products.map((product,index) => (
       <>
       <tr>
        <td>
            {index +1}
        </td>
         <td>
           <div className='d-flex align-items-center'>
           
             <div className='ms-3'>
             <MDBCardImage
                          src={`data:image/png;base64,${product.productImage}`} 
                           fluid className="rounded-3" alt="" style={{width:100, height:100}} />
             </div>
           </div>
         </td>
         <td>
           <div className='d-flex align-items-center'>
             <div className='ms-3'>
               <p className='fw-bold mb-1'>{product.pname}</p>
             </div>
           </div>
         </td>
         <td>
           <p className='fw-normal mb-1'>{product.productDetails.price}</p>
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

export default TrendingProducts;

{/* <h1>Trending Products</h1>
<ul>
  {products.map((product) => (
    <li key={product.pid}>
      <h2>{product.pname}</h2>
      <p>{product.description}</p>
      <p>Price: Rs. {product.productDetails.price}</p>
    </li>
  ))}
</ul> */}