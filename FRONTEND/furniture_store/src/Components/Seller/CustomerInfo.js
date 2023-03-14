import { useEffect, useState } from 'react';
import axios from 'axios';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
  } from "mdb-react-ui-kit";

function CustomerDetails() {
  const [customer, setCustomer] = useState({});
  const searchParams = new URLSearchParams(window.location.search);
  const email = searchParams.get('email');

  useEffect(() => {
    async function fetchCustomerDetails() {
      try {
        const response = await axios.get(`http://localhost:8080/api/sellers/customer-details?email=${email}`);
        setCustomer(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCustomerDetails();
  }, [email]);

  return (
    <div className="container vh-100 me-5 mb-auto">
    <div className="row justify-content-center align-items-center vh-100 ">
      <div className="col-12 col-lg-12 col-xl-7">
        <div className="col-12 col-lg-12 col-xl-12">
          <div className="card shadow-2-strong card-registration" style={{ width: "80%", height: "100%", borderRadius: "15px" }}>
            <div className="card-body p-4 p-md-5">
              <div className="text-center mb-4 pb-2 pb-md-0 mb-md-3">
                <h3>Customer Details</h3>
              </div>
              <div className="mb-3">
                <label htmlFor="formType" className="form-label">Name: </label>
                <span> {customer.fname} {customer.lname}</span><br/>
                <label htmlFor="formType" className="form-label">Contact: </label>
                <span> {customer.contact}</span><br/>
                <label htmlFor="formType" className="form-label">Address: </label>
                <span> {customer.address}</span><br/>
              </div>
         
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
}

export default CustomerDetails;
