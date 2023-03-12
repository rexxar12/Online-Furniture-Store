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
            <div className="mb-2">
            <span ><a href="/past/orders">Past Orders</a></span>
            </div>
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
                                fluid className="rounded-3" alt="" style={{width:100, height:100}} />
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
              <td>{new Date(order.orderDate).toLocaleDateString()}</td>
              <td>
                {new Date(order.deliveryDate).toLocaleDateString()}
              </td>
              <td>
                {(order.status)===0 ? <p>Order Placed</p>:<p>Order Recieved</p>}
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
