import React, { useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";


function LoginForm() {
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
    <form onSubmit={handleSubmit}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>User ID</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter email"
            value={email} 
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"

            value={password} 
            onChange={handlePasswordChange}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
        <a href="#">Forgot password?</a>
        </p>
      </form>

  );  
}

export default LoginForm;