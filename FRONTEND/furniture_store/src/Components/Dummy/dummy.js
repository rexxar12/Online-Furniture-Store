import React, { useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
}
from 'mdb-react-ui-kit';

import { Card } from 'react-bootstrap';
import './Login.css';
import Lottie from 'react-lottie-player'
import login from './login.json'
import { useEffect, useRef,useState } from "react";



function App() {
  const animationRef = useRef(null);

useEffect(() => {
  const anim = animationRef.current;
  if (anim) {
    anim.play();
    anim.addEventListener('complete', () => {
      anim.setDirection(1);
    });
  }
  return () => {
    const anim = animationRef.current;
    if (anim) {
      anim.removeEventListener('complete');
    }
  };
}, []);

const initialState = {
  email: "",
  password: "",
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "EMAIL_CHANGE":
      return { ...state, email: action.payload };
    case "PASSWORD_CHANGE":
      return { ...state, password: action.payload };
    case "LOGIN_SUCCESS":
      return { ...state, error: "", email: "", password: "" };
    case "LOGIN_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

const { email, password, error } = useSelector((state) => state);
const dispatch = useDispatch();

const [state, dispatchLocal] = useReducer(reducer, initialState);

const handleEmailChange = (event) => {
  dispatchLocal({ type: "EMAIL_CHANGE", payload: event.target.value });
};

const handlePasswordChange = (event) => {
  dispatchLocal({ type: "PASSWORD_CHANGE", payload: event.target.value });
};

const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    const response = await axios.post("http://localhost:8080/api/login", {
      email: state.email,
      password: state.password,
    });
    const userRole = response.data;
    dispatch({ type: "LOGIN_SUCCESS", payload: userRole });
    if (userRole === "admin") {
      window.location.replace("/admin");
    } else if (userRole === "seller") {
      window.location.replace("/seller");
    } else if (userRole === "carpenter") {
      window.location.replace("/carpenter");
    } else {
      window.location.replace("/customer");
    }
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", payload: error.response.data });
  }
};


  return ( 
    <Card border="" rounded="lg" style={{ maxWidth: '1100px',maxHeight:'600px', marginLeft:'auto', marginRight:'auto',marginTop:'50px' }}>
    <div>
  <MDBContainer fluid className="my-5">

  <MDBRow>

    <MDBCol col='6' className="mb-5">
    <div className="d-flex flex-column ms-5">

<div className="text-center">
    <Lottie
              loop={true}
              autoPlay={true}
              animationData={login}
              style={{ width: 500, height: 400 }}
              ref={animationRef}
              className='icon'
            />
            </div>
            </div>
    </MDBCol>

    <MDBCol col='6' className="mb-5">
    <div className="d-flex flex-column ms-5">
      <div className="d-flex flex-column  justify-content-center h-100 mb-4">
      <div className="text-white px-3 py-4 p-md-5 mx-md-4">
      <form onSubmit={handleSubmit}>
      <MDBInput wrapperClass='mb-4' 
       placeHolder='Email address'
        id='formControlSm'
         type='text'
          size="lg"
          value={email} 
            onChange={handleEmailChange}/>
      <MDBInput wrapperClass='mb-4' placeHolder='Password' id='formControlSm' type='password' size="lg"
      value={password} 
      onChange={handlePasswordChange}/>

      <div className="d-flex justify-content-between mb-4">
        
      </div>

      <div className="text-center pt-1 mb-5 pb-1">
              <button className="mb-4 w-100">Sign in</button>
              <a className="text-muted" href="#!">Forgot password?</a>
            </div>

            <div className="d-flex align-items-center justify-content-center mb-4">
              <p className='text-dark my-2'>Dont Have an Account?</p>
              <a href='/reg'>
              <button outline className='mx-2 btn btn-outline-danger Button'>
                Create New
              </button>
              </a>
            </div>
            </form>

            </div>
            </div>
            </div>
    </MDBCol>

  </MDBRow>

  
</MDBContainer>
</div>
</Card>
);
}


export default App;