import React, { useState } from "react";
import axios from "axios";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const url="http://localhost:8080/api/login";

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(url, { email, password });
      const userRole = response.data;
      if (userRole === "admin") {
        window.location.replace("/admin");
      }
      else if(userRole ==="seller"){
        window.location.replace("/seller");
      }
      else if(userRole ==="carpenter"){
        window.location.replace("/carpenter");
      }
      else {
        window.location.replace("/customer");
      }
    } catch (error) {
      setError(error.response.data);
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
