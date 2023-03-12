import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from '../Navigation/Navigation';
import { MDBBadge, MDBTable, MDBTableHead, MDBTableBody, MDBContainer, MDBCard, MDBCardImage } from 'mdb-react-ui-kit';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const cid = sessionStorage.getItem("id");
    axios
      .get(`http://localhost:8080/api/orders/0/${cid}`)
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.log(error.response.data); // log error message
      });
  }, []);

  return (
    <div>

    <Navbar/>
        <MDBContainer>
            <h1 className='heading mt-5 mb-5'>Orders</h1>
        <MDBCard>
        <MDBTable>
          <MDBTableHead>
            <tr className='ms-5'>
              <th scope='col'><p>Image</p></th>
              <th scope='col'><p>Product Name</p></th>
              <th scope='col'><p>Quantity</p></th>
              <th scope='col'><p>Order Date</p></th>
              <th scope='col'><p>Delivery Date</p></th>
              <th scope='col'><p className='actions'>Status</p></th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
          {orders.map((order) => (
            <>
            <tr>
              <td>
                <div className='d-flex align-items-center'>
                
                  <div className='ms-3'>
                  <MDBCardImage
                               src={`data:image/png;base64,${order.product.productImage}`} 
                                fluid className="rounded-3" alt="Cotton T-shirt" style={{width:100, height:100}} />
                  </div>
                </div>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='ms-3'>
                    <p className='fw-bold mb-1'>{order.product.pname}</p>
                  </div>
                </div>
              </td>
              <td>
                <p className='fw-normal mb-1'>{order.quantity}</p>
              </td>
              <td>{order.orderDate}</td>
              <td>
                {order.deliveryDate}
              </td>
              <td>
                {order.status}
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

export default Orders;

    // <div>
    //   <h1>Orders</h1>
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>Order ID</th>
    //         <th>Product ID</th>
    //         <th>Quantity</th>
            
    //         <span><th>Order Date</th></span>
    //         <span><th>Delivery Date</th></span>
    //         <th>Status</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {orders.map((order) => (
    //         <tr key={order.id}>
    //           <td><span>{order.id}</span></td>
    //           <td><span>{order.product.pname}</span></td>
    //           <td><span>{order.quantity}</span></td>
    //           <td><span>{order.orderDate}</span></td>
    //           <td><span>{order.deliveryDate}</span></td>
    //           <td><span>{order.status}</span></td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>