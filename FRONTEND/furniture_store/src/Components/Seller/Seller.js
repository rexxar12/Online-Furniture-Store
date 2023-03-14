import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../reduxStore/actions';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MDBBadge, MDBTable, MDBTableHead, MDBTableBody, MDBContainer, MDBCard,MDBCardImage } from 'mdb-react-ui-kit';
import Order from './Order'
import Navbar from './Navigation/Navigation'
import LowStockProducts from './LowStock';
const Seller = () => {
    //logout logic
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
      const hist=window.history.state;
      window.history.replaceState(hist,"","/");
      dispatch(logout());
      navigate('/');
    };

    //approval Logic
    const [orders, setOrders] = useState([]);

  useEffect(() => {
    const sellerId = sessionStorage.getItem('id');
    console.log(sellerId);
    axios.get(`http://localhost:8080/api/orders/seller/${sellerId}/orders`)
      .then(response => setOrders(response.data))
      .catch(error => console.log(error));
  }, []);

  const confirmOrder = (orderId) => {
    axios.put(`http://localhost:8080/api/orders/${orderId}/confirm`)
      .then(response => {
        console.log(response.data);
        setOrders(prevOrders => prevOrders.map(order => {
          if (order.oid === orderId) {
            return { ...order, status: 1 };
          } else {
            return order;
          }
        }));
      })
      .catch(error => console.log(error));
  }
  return (
    <div>
      <Navbar/>

       
    
      <MDBContainer className='mt-5 mb-5'>
        <h1 className='heading mt-5 mb-5'>Seller Dashboard</h1>
    <MDBCard>
    <MDBTable>
      <MDBTableHead>
        <tr className='ms-5'>
          <th scope='col'><p>Image</p></th>
          <th scope='col'><p>Product Name</p></th>
          <th scope='col'><p>Quantity</p></th>
          <th scope='col'><p>Customer Details</p></th>
          <th scope='col'><p>Status</p></th>
          <th scope='col'><p className='actions'>Actions</p></th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      {orders.map(order => (
        
        <>
        <tr>
          <td>
          <MDBCardImage 
          src={`data:image/jpg;base64,${order.product.productImage}`} 
          fluid className="rounded-3" alt="Cotton T-shirt" style={{width:100, height:100}} />
          </td>
          <td>
            <div className='d-flex align-items-center'>
            
              <div className='ms-3'>
                <p className='text-muted mb-0'>{order.product.pname}</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>{order.quantity}</p>
          </td>
          <td>
            <a className='fw-normal mb-1' href={`/seller/customer-details?email=${order.customer.email}`}>{order.customer.fname} {order.customer.lname}</a>
          </td>
          
          <td>
          {order.status === 0 ? <><MDBBadge color='danger' pill>
             Pending
            </MDBBadge></> :
            <>
            <MDBBadge color='success' pill>
             Confirmed
            </MDBBadge>
            </>
            }
          </td>
          <td>
          {order.status === 0 &&
                  <button onClick={() => confirmOrder(order.oid)}>Confirm</button>}
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

export default Seller;