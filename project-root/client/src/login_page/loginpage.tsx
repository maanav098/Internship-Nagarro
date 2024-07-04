import React, { useState } from "react";
import "./login.css";
import Header from "./Header/Header";
import Leftdown from "./left-right/left";
import Rightdown from "./left-right/right";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        This Company
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.status === 200) {
        alert(data.message); 
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="loginpage">
      <div className="container">
        <div className="header">
          <p className="p">
            <Header />
          </p>
        </div>
        <div className="left-aside">
          <Leftdown />
        </div>
        <div className="banner">LOGIN PAGE</div>

        <div className="right-aside">
          <Rightdown />
        </div>
        <div className="main">
          <div className="login-form">
            <h2>LOGIN</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <button type="submit">LOGIN</button>
            </form>
            <Copyright />
          </div>
        </div>
        <div className="low-content">
          <div>
            <h4>About Us</h4>
            <p>
              We are a company dedicated to providing the best service possible.
              Our mission is to bring quality and excellence to our customers.
            </p>
          </div>
        </div>
        <div className="footer">
          <div className="footer-container">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact Us</h4>
              <p>Email: contact@company.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
