import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTypography,
    } from "mdb-react-ui-kit";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import Payment from "../Payment";

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

  let totalAmount = 0;

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

  //place order
  const placeOrder = () => {
    axios
      .post(`http://localhost:8080/api/cart/placeorder/${cid}`)
      .then((response) => {
        console.log(response.data); // log success message
        window.location.href = "/orders"; // redirect to orders page
      })
      .catch((error) => {
        console.log(error.response.data); // log error message
      });
  };

  return (
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol size="12">
                <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                  <MDBCardBody className="p-0">
                    <MDBRow className="g-0">
                      <MDBCol lg="8">
                        <div className="p-5">
                          <div className="d-flex justify-content-between align-items-center mb-5">
                            <MDBTypography tag="h1" className="fw-bold mb-0 text-black">
                              Shopping Cart
                            </MDBTypography>
                            <MDBTypography className="mb-0 text-muted">
                              {cartItems.length} items
                            </MDBTypography>
                          </div>



                          {cartItems.length===0 ?<p>Hmm....The cart seems to be empty. Try adding items to cart.</p> : <>
                          {cartItems.map((item) => {
                            totalAmount += item.total;
                            return(
                            <>
                          <hr className="my-4" />
        
                          <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                            <MDBCol md="2" lg="2" xl="2">
                              <MDBCardImage
                               src={`data:image/png;base64,${item.productImage}`} 
                                fluid className="rounded-3" alt="Cotton T-shirt" />
                            </MDBCol>
                            <MDBCol md="3" lg="3" xl="3">
                              <MDBTypography tag="h6" className="text-muted">
                                {item.productName}
                              </MDBTypography>
                              <MDBTypography tag="h6" className="text-black mb-0">
                                {item.category}
                              </MDBTypography>
                            </MDBCol>
                            <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                              <button color="link" className="px-2 btn bg-transparent" onClick={() => handleSubtract(item)}>
                                <MDBIcon fas icon="minus" />
                              </button>
        
                              {item.quantity}
        
                              <button color="link" className="px-2 btn bg-transparent" onClick={() => handleAdd(item)}>
                                <MDBIcon fas icon="plus" />
                              </button>
                            </MDBCol>
                            <MDBCol md="3" lg="2" xl="2" className="text-end">
                              <MDBTypography tag="h6" className="mb-0">
                                Rs. {item.total}    
                              </MDBTypography>
                            </MDBCol>
                            <MDBCol md="1" lg="1" xl="1" className="text-end">
                              <a href="#!" className="text-muted">
                                <MDBIcon fas icon="times" />
                              </a>
                            </MDBCol>
                          </MDBRow>
                          </>
                            );
                        })}
                      </>}
                            


                          <hr className="my-4" />
        
                          <div className="pt-5">
                            <MDBTypography tag="h6" className="mb-0">
                              <MDBCardText tag="a" href="/customer/home" className="text-body">
                                <MDBIcon fas icon="long-arrow-alt-left me-2" /> Back
                                to shop
                              </MDBCardText>
                            </MDBTypography>
                          </div>
                        </div>
                      </MDBCol>
                      <MDBCol lg="4" className="bg-grey">
                        <div className="p-5">
                          <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1">
                            Summary
                          </MDBTypography>
        
                          <hr className="my-4" />
        
                          <div className="d-flex justify-content-between mb-4">
                            <MDBTypography tag="h5" className="text-uppercase">
                              Payment: 
                            </MDBTypography>
                            <MDBTypography tag="h5"> <Payment/></MDBTypography>
                          </div>
        
                          
        
                          
        
        
                          <hr className="my-4" />
        
                          <div className="d-flex justify-content-between mb-5">
                            <MDBTypography tag="h5" className="text-uppercase">
                              Total price
                            </MDBTypography>
                            <MDBTypography tag="h5">Rs. {totalAmount}</MDBTypography>
                          </div>
        
                          <button className="btn btn-dark" block size="lg" onClick={placeOrder}>
                            Place Order
                          </button>
                        </div>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        );
}    
export default CartItems;

    // <div>
    //   <h1>Cart Items</h1>
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>Product id</th>
    //         <th>Product Name</th>
    //         <th>Price</th>
    //         <th>Quantity</th>
    //         <th>Total</th>
    //       </tr>
    //     </thead>
    //     <tbody>


    //       {cartItems.map(item => (
    //         <tr key={item.productName}>
    //           <td>{item.cart_id}</td>
    //           <td>{item.productName}</td>
    //           <td>{item.price}</td>
    //           <td className='text-center'>
    //             <button onClick={() => handleSubtract(item)}>-</button>
    //             {item.quantity}
    //             <button onClick={() => handleAdd(item)}>+</button>
    //           </td>
    //           <td>{item.total}</td>
    //         </tr>
    //       ))}


    //     </tbody>
    //   </table>
    // </div>