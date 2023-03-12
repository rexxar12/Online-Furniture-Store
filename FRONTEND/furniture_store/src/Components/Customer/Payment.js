import React from 'react'
import { useState } from 'react';

function Payment(props) {


    const [payment, setPayment] = useState('');

  const handleChange = (event) => {
    setPayment(event.target.value);
    props.handlePayment(event.target.value);
  }
  return (
    <>
    <div>
                <select value={payment} onChange={handleChange} className="selectpicker" data-size="4">
		            <option value="">Select Payment</option>
								<option value="Card">Credit/Debit Cards</option>
								<option value="COD">Cash On Delivery</option>
								<option value="UPI">UPI</option>
								
	              </select>
                </div>
    
    </>
  )
}

export default Payment