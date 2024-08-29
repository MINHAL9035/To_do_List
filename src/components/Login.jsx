import { useState, useEffect } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import '../Login.css';



const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      navigate("/home");
    }
  }, [navigate]);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    if (email) {
      if (isValidEmail(email)) {
        localStorage.setItem("userEmail", email);
        message.success("Logged In Successfully")
        navigate("/home");
      } else {
        message.error("Please enter a valid email address");
      }
    } else {
      message.error("Please enter your email");
    }
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img src="/todoImage.png" alt="Login" />
      </div>
      <div className="login-form">
        <div className="form-content">
          <h2>Welcome Back</h2>
          <p className="PLogin">Please enter your email to continue</p>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input  
            className="inp"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn" onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
