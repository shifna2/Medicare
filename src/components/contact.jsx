
import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">

      {/* Navigation Bar */}
      {/* <Nav className="medicare-navbar">

        <Nav.Item className="brand">
          <Nav.Link as={Link} to="/home">
            MediCare
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/home">
            Home
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/booking">
            Booking
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/doctors">
            Doctors
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/departments">
            Departments
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/contact">
            Contact Us
          </Nav.Link>
        </Nav.Item>

        

      </Nav> */}

      {/* Contact Cards */}
      <Container fluid className="contact-content">

        <Row className="contact-cards">

          {/* Hospital Address */}
          <Col lg={3} md={6} className="contact-column">
            <div className="contact-card">

              <h2>
                Hospital
                <br />
                Address
              </h2>

              <p>
                123 Health Avenue, Anna Nagar,
                Chennai, India
              </p>

            </div>
          </Col>

          {/* Phone Numbers */}
          <Col lg={3} md={6} className="contact-column">
            <div className="contact-card">

              <h2>Call Us</h2>

              <p>+91 98765 43210</p>

              <p>+91 91234 56789</p>

            </div>
          </Col>

          {/* Email */}
          <Col lg={3} md={6} className="contact-column">
            <div className="contact-card">

              <h2>Email Support</h2>

              <p>support@medicare.com</p>

              <p>appointments@medicare.com</p>

            </div>
          </Col>

          {/* Working Hours */}
          <Col lg={3} md={6} className="contact-column">
            <div className="contact-card">

              <h2>Working Hours</h2>

              <p>
                Monday - Saturday: 8:00 AM to 8:00 PM
              </p>

              <p>
                Emergency Services: Open 24/7
              </p>

            </div>
          </Col>

        </Row>

        {/* Appointment Banner */}
        <div className="appointment-banner">

          <div className="appointment-text">

            <h1>Need a quick appointment?</h1>

            <p>
              Visit our booking page to request a consultation
              with your preferred doctor.
            </p>

          </div>

          <Button
            as={Link}
            to="/booking"
            className="appointment-button"
          >
            Book Appointment
          </Button>

        </div>

      </Container>

      {/* Footer
      <footer className="contact-footer">

        <Container fluid>

          <Row className="g-4">

            Hospital Information
            <Col lg={4} md={6}>

              <h2>MediCare Hospital</h2>

              <p>
                Compassionate healthcare with experienced
                doctors, modern facilities, and patient-first
                service for every family.
              </p>

            </Col>

            Quick Links
            <Col lg={4} md={6}>

              <h2>Quick Links</h2>

              <div className="contact-footer-links">

                <Link to="/home">Home</Link>

                <Link to="/about">About</Link>

                <Link to="/booking">Booking</Link>

                <Link to="/contact">Contact Us</Link>

              </div>

            </Col>

            Contact Information
            <Col lg={4} md={6}>

              <h2>Contact</h2>

              <p>Email: support@medicare.com</p>

              <p>Phone: +91 98765 43210</p>

              <p>Location: Chennai, India</p>

            </Col>

          </Row>

        </Container>

        Copyright
        <div className="contact-copyright">
          © 2026 MediCare Hospital. All rights reserved.
        </div>

      </footer> */}

    </div>
  );
}

export default Contact;
