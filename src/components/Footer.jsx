
import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer className="home-footer">
      <div className="footer-section">
        <h2>MediCare Hospital</h2>
        <p>
          Compassionate healthcare with experienced doctors,
          modern facilities, and patient-first service for every family.
        </p>
      </div>

      <div className="footer-section">
        <h2>Quick Links</h2>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/doctors">Doctors</Link>
        <Link to="/departments">Department</Link>
        <Link to="/contact">Contact Us</Link>
      </div>

      <div className="footer-section">
        <h2>Contact</h2>
        <p>Email: support@medicare.com</p>
        <p>Phone: +91 98765 43210</p>
        <p>Location: Chennai, India</p>
      </div>

      <div className="footer-bottom">
        © 2026 MediCare Hospital. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
