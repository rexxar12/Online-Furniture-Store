import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OrdersBySeller() {
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
      <h1>Orders</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Confirm</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.oid}>
              <td>{order.oid}</td>
              <td>{order.product.pname}</td>
              <td>{order.quantity}</td>
              <td>{order.status === 0 ? "Pending" : "Confirmed"}</td>
              <td>
                {order.status === 0 &&
                  <button onClick={() => confirmOrder(order.oid)}>Confirm</button>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersBySeller;
