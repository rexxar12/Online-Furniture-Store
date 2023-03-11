import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CartItems() {
  const [cartItems, setCartItems] = useState([]);

  const cid = sessionStorage.getItem('id');
  useEffect(() => {
    axios.get(`http://localhost:8080/api/cart/${cid}`)
      .then(response => {
        setCartItems(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleAdd = (item) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.productName === item.productName) {
        return {
          ...cartItem,
          quantity: cartItem.quantity + 1
        }
      } else {
        return cartItem;
    }
});

setCartItems(updatedCartItems);

setTimeout(() => {
    const newQ=item.quantity + 1 ;
    console.log(newQ);
      axios.put(`http://localhost:8080/api/cart/update/${cid}/${item.cart_id}/${newQ}`)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.error(error);
        });
    }, 5000);
  };

  const handleSubtract = (item) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.productName === item.productName) {
        return {
          ...cartItem,
          quantity: cartItem.quantity - 1
        }
      } else {
        return cartItem;
      }
    });

    setCartItems(updatedCartItems);

    setTimeout(() => {
        const newQ = item.quantity - 1;
        console.log(newQ);
      axios.put(`http://localhost:8080/api/cart/update/${cid}/${item.cart_id}/${newQ}`)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.error(error);
        });
    }, 5000);
  };

  return (
    <div>
      <h1>Cart Items</h1>
      <table>
        <thead>
          <tr>
            <th>Product id</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.productName}>
              <td>{item.cart_id}</td>
              <td>{item.productName}</td>
              <td>{item.price}</td>
              <td className='text-center'>
                <button onClick={() => handleSubtract(item)}>-</button>
                {item.quantity}
                <button onClick={() => handleAdd(item)}>+</button>
              </td>
              <td>{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CartItems;
