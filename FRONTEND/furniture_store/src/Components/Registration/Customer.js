import React from 'react';
import { Formik, Field, ErrorMessage,Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './Register.css';
import { Row,Col } from 'react-bootstrap';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:8080/api/customers/register';

const Registration = () => {
  const navigate=useNavigate();
  const initialValues = {
    fname:'',
    lname:'',
    email: '',
    password: '',
    address: '',
    contact: '',
    city_id:'',
  };
  const [cities, setCities] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/cities')
            .then(response => setCities(response.data))
            .catch(error => console.log(error));
    }, []);

  const validationSchema = Yup.object().shape({
    fname: Yup.string().required('First Name is required').matches(/[A-Z]/, 'Enter Atleast one Capital Letter'),
    lname: Yup.string().required('Last Name is required').matches(/[A-Z]/, 'Enter Atleast one Capital Letter'),
    email: Yup.string().email('Invalid email').required('Email is required').matches(/^[^\s@]+@[^\s@]+\.[a-zA-Z]{3}$/ , 'Enter email properly'),
    password: Yup.string().required('Password is required').matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/, 'Password should atleast contain one capital letter,one special character and one digit. Length should be atleast 8 characters'),
    address: Yup.string().required('Address is required'),
    contact: Yup.string().required('Phone number is required').matches(/^\d{10}$/, 'Phone number must be 10 digits'),
    city_id: Yup.string().required('City is required'),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await axios.post(API_URL, values);
      alert('Customer registered successfully');
      resetForm();
      navigate("/home");
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
            <label htmlFor="fname" className="form-label">First Name:</label>
            <Field type="text" name="fname" id="fname"  className="form-control form-control-lg"/>
            <ErrorMessage name="fname" component="div" className="error" />
            </div>
            </Col>
            <Col className="col-md-6 mb-3">
            <div>
            <label htmlFor="lname" className="form-label">Last Name:</label>
            <Field type="lname" name="lname" id="lname" className='form-control form-control-lg' />
            <ErrorMessage name="lname" component="div" className="error" />
          </div>
          </Col>
          </Row>
          <Row>
          <Col className="col-md-6 mb-3">
            <div>
            <span htmlFor="email" className='form-label'>Email:</span>
            <Field type="email" name="email" id="email" className='form-control form-control-lg'/>
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          </Col>
          <Col className="col-md-6 mb-3">
          <div >
            <span htmlFor="password" className='form-label'>Password:</span>
            <Field type="password" name="password" id="password" className='form-control form-control-lg'/>
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          </Col>
          </Row>
          <Row>
          <Col className="col-md-6 mb-3">
            <div >
            <span htmlFor="contact" className='form-label'>Phone Number:</span>
            <Field type="text" name="contact" id="contact" className='form-control form-control-lg'/>
            <ErrorMessage name="contact" component="div" className="error" />
            </div>
          </Col>
          <Col className="col-md-6 mb-3">
          <div >
          <span htmlFor="city_id" className='form-label'>City:</span>
            <Field as='select' id="city_id" name="city_id" value={cities.city_name} className='form-select form-select-lg'>
                <option value="">Select a city</option>
                {cities.map(city => (
                    <option key={city.city_id} value={city.city_id}>{city.city_name}</option>
                ))}
            </Field>
            <ErrorMessage name="city_id" component="div" className="error" />
          </div>
          </Col>
          </Row>
            <div >
            <span htmlFor="address">Address:</span>
            <Field type="textbox" name="address" id="address" className='form-control form-control-lg' />
            <ErrorMessage name="address" component="div" className="error" />
            </div>
         
          <div className="mt-2 pt-2 text-center">
          <button type="submit" disabled={isSubmitting} className="btn btn-dark btn-rounded btn-lg justify-content-center align-items-center">
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
