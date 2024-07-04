import React from "react";
import "./footer.css";

const Footer: React.FC = () => {
  return (
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
  );
};

export default Footer;
