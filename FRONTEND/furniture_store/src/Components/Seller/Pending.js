import { useState, useEffect } from 'react';
import axios from 'axios';

function OrderTable() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const sellerId = sessionStorage.getItem('id');
    console.log(sellerId);
    axios.get(`http://localhost:8080/api/orders/seller/${sellerId}/orders`)
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Status</th>
          <th>Order Date</th>
          <th>Delivery Date</th>
          <th>Payment</th>
          <th>Customer Name</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => (
          <tr key={order.oid}>
            <td>{order.oid}</td>
            <td>{order.product.pname}</td>
            <td>{order.quantity}</td>
            <td>{order.status}</td>
            <td>{order.orderDate}</td>
            <td>{order.deliveryDate}</td>
            <td>{order.payment}</td>
            <td>{order.customer.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default OrderTable;
