import {React,useState} from 'react';
import { Formik, Field, ErrorMessage,Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './Register.css';
import { Row,Col } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';



const API_URL = 'http://localhost:8080/api/carpenters/register';

const Registration = () => {
  const initialValues = {
    fname:'',
    lname:'',
    email: '',
    password: '',
    contact: '',
    gstno: '',
    address: '',
    area:'',
  };
  

  const [showPassword, setShowPassword] = useState(false);

  function togglePasswordVisibility() {
    setShowPassword(prevState => !prevState);
  }



  
  const validationSchema = Yup.object().shape({
    fname: Yup.string().required('Name is required').matches(/[A-Z]/, 'Enter Atleast one Capital Letter'),
    lname: Yup.string().required('Name is required').matches(/[A-Z]/, 'Enter Atleast one Capital Letter'),
    email: Yup.string().email('Invalid email').required('Email is required').email('Invalid email').required('Email is required').matches(/^[^\s@]+@[^\s@]+\.[a-zA-Z]{3}$/ , 'Enter email properly'
    ),
    password: Yup.string().required('Password is required').matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/, 'Password should atleast contain one capital letter,one special character and one digit. Length should be atleast 8 characters'),
    contact: Yup.string().required('Phone number is required').matches(/^\d{10}$/, 'Phone number must be 10 digits'),
    gstno: Yup.string().required('GST number is required').matches(/^\d{15}$/, 'GST number must be 15 digits'),
    address: Yup.string().required('Address is required'),
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
          <div className="password-input-container">
            <span htmlFor="password" className='form-label'>Password:</span>
            <div className="password-input-container">
            <Field type={showPassword ? 'text' : 'password'} name="password" id="password" className='form-control form-control-lg'/>
            <button type="button"
          className="password-toggle-btn"
          onClick={togglePasswordVisibility}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
        </div>
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          </Col>


          </Row>
            <div >
            <span htmlFor="contact" className='form-label'>Phone Number:</span>
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
