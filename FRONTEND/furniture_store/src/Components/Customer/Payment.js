import React from 'react'
import { useState } from 'react';

function Payment() {


    const [payment, setPayment] = useState('');

  const handleChange = (event) => {
    setPayment(event.target.value);
    console.log(event.target.value);
  }
  return (
    <>
    <div>
                <select value={payment} onChange={handleChange} className="selectpicker" data-size="4">
		            <option value="">Select Payment</option>
								<option value="Mahogany">Credit/Debit Cards</option>
								<option value="Teak">Cash On Delivery</option>
								<option value="Rose_Wood">UPI</option>
								
	              </select>
                </div>
    
    </>
  )
}

export default Payment