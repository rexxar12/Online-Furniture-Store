import React, { useState } from 'react';
import Seller from '../Registration/Seller';
import Customer from '../Registration/Customer';

import './Register.css'

const Register = () => {
  const [formType, setFormType] = useState('');

  const handleSelect = (event) => {
    setFormType(event.target.value);
  };

  return (
    <div className='gradient-custom'>
      <div className="container vh-100 me-5 mb-auto">
        <div className="row justify-content-center align-items-center vh-100 ">
          <div className="col-12 col-lg-12 col-xl-7">
            <div className="col-12 col-lg-12 col-xl-12">
              <div className="card shadow-2-strong card-registration" style={{ width: "80%", height: "100%", borderRadius: "15px" }}>
                <div className="card-body p-4 p-md-5">
                  <div className="text-center mb-4 pb-2 pb-md-0 mb-md-3">
                    <h3>Registration Form</h3>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="formType" className="form-label">Select registration type:</label>
                    <select id="formType" className="form-select form-select-lg" value={formType} onChange={handleSelect}>
                      <option value="">-- Select Type --</option>
                      <option value="seller">Seller</option>
                      <option value="customer">Customer</option>
                      
                    </select>
                  </div>
                  {formType === "seller" && <Seller />}
                  {formType === "customer" && <Customer />}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
