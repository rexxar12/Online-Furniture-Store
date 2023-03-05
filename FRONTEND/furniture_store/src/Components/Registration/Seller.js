import React from 'react';
import { Formik, Field, ErrorMessage,Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './Register.css';
import { Card,Row,Col, Container } from 'react-bootstrap';



const API_URL = 'http://localhost:8080/api/sellers/register';

const Registration = () => {
  const initialValues = {
    sname: '',
    email: '',
    password: '',
    address: '',
    contact: '',
    gstno: '',
    area:'',
  };

  const validationSchema = Yup.object().shape({
    sname: Yup.string().required('Name is required').matches(/[A-Z]/, 'Enter Atleast one Capital Letter'),
    
    email: Yup.string().email('Invalid email').required('Email is required').matches(/^[^\s@]+@[^\s@]+\.[a-zA-Z]{3}$/ , 'Enter email properly'
    ),
    password: Yup.string().required('Password is required').matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/, 'Password should atleast contain one capital letter,one special character and one digit. Length should be atleast 8 characters'),
    contact: Yup.string().required('Phone number is required').matches(/^\d{10}$/, 'Phone number must be 10 digits'),
    address: Yup.string().required('Address is required'),
    gstno: Yup.string().required('GST number is required').matches(/^\d{15}$/, 'GST number must be 15 digits'),
    area: Yup.string().required('area number is required'),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await axios.post(API_URL, values);
      alert('Seller registered successfully');
      resetForm();
    } catch (error) {
      alert(error.response.data);
      console.log(values);
    } finally {
      setSubmitting(false);
    }
  };
  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <>
                  
        <Form>
            <Row>
            <Col className="col-md-6 mb-3">

          <div className='form-outline'>
            <label htmlFor="sname" className="form-label">Seller Name:</label>
            <Field type="text" name="sname" id="sname"  class="form-control form-control-lg"/>
            <ErrorMessage name="sname" component="div" className="error" />
            </div>
            </Col>
            
            <Col className="col-md-6 mb-3">
            <div>
            <label htmlFor="email" className="form-label">Email:</label>
            <Field type="email" name="email" id="email" className='form-control form-control-lg' />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
      </Col>
          </Row>
            <div>
            <span htmlFor="password" className='form-label'>Password:</span>
            <Field type="password" name="password" id="password" className='form-control form-control-lg'/>
            <ErrorMessage name="password" component="div" className="error" />
          </div>
         
          <div >
            <span htmlFor="phoneNumber" className='form-label'>Phone Number:</span>
            <Field type="text" name="contact" id="contact" className='form-control form-control-lg'/>
            <ErrorMessage name="contact" component="div" className="error" />
          </div>
          
            <div >
            <span htmlFor="gstno" className='form-label'>GST Number:</span>
            <Field type="text" name="gstno" id="gstno" className='form-control form-control-lg'/>
            <ErrorMessage name="gstno" component="div" className="error" />
            </div>
         
          <div >
            <span htmlFor="area" className='form-label'>Area Code:</span>
            <Field type="text" name="area" id="area" className='form-control form-control-lg'/>
            <ErrorMessage name="area" component="div" className="error" />
            </div>
         
            <div >
            <span htmlFor="address">Address:</span>
            <Field type="textbox" name="address" id="address" className='form-control form-control-lg' />
            <ErrorMessage name="address" component="div" className="error" />
            </div>
         
          <div className="mt-2 pt-2 text-center">
          <button type="submit" disabled={isSubmitting} class="btn btn-dark btn-rounded btn-lg justify-content-center align-items-center">
            Register
          </button>
          </div>
    
        </Form>
       </>

      )}
    </Formik>
  );
};

export default Registration;
