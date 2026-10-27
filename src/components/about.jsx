
import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* Navigation Bar */}
      {/* <Nav className="about-navbar">
        <Nav.Item className="about-brand">
          <Nav.Link as={Link} to="/">MediCare</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/booking">Booking</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/departments">Departments</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
        </Nav.Item>

             </Nav> */}

      {/* About Introduction */}
      <Container fluid className="about-container">

        <section className="about-hero">
          <Row className="align-items-center g-4">

            <Col lg={8}>
              <span className="about-badge">
                About MediCare
              </span>

              <h1>
                Healing With Compassion,
                <br />
                Skill, And Modern Care
              </h1>

              <p className="about-description">
                MediCare Hospital is dedicated to delivering trusted
                healthcare through experienced specialists, advanced
                medical support, and a patient-first environment for
                every family.
              </p>
            </Col>

            <Col lg={4}>
              <div className="choose-card">
                <h2>Why Patients Choose Us</h2>

                <ul>
                  <li>
                    Experienced doctors across multiple specialties
                  </li>

                  <li>
                    Modern diagnostic and treatment facilities
                  </li>

                  <li>
                    Friendly staff and patient-centered service
                  </li>

                  <li>
                    Reliable emergency and follow-up care
                  </li>
                </ul>
              </div>
            </Col>

          </Row>
        </section>

        {/* Mission, Vision and Promise */}
        <Row className="about-values g-4">

          <Col lg={4} md={6}>
            <div className="value-card">
              <h2>Our Mission</h2>

              <p>
                To provide accessible, ethical, and high-quality
                medical care that improves the health and well-being
                of our patients and community.
              </p>
            </div>
          </Col>

          <Col lg={4} md={6}>
            <div className="value-card">
              <h2>Our Vision</h2>

              <p>
                To be a trusted healthcare destination known for
                clinical excellence, compassion, and innovation
                in patient care.
              </p>
            </div>
          </Col>

          <Col lg={4} md={6}>
            <div className="value-card">
              <h2>Our Promise</h2>

              <p>
                We listen carefully, treat responsibly, and support
                every patient with respect, transparency, and
                dedication at each step.
              </p>
            </div>
          </Col>

        </Row>

        {/* Hospital Information and Statistics */}
        <section className="about-story">

          <Row className="g-5">

            <Col lg={7}>
              <h2>Built Around People, Not Just Treatment</h2>

              <p>
                Our hospital combines medical expertise with a warm
                and supportive atmosphere. From general consultations
                to specialized treatments, we focus on making
                healthcare safe, understandable, and reassuring for
                patients of all ages.
              </p>

              <p>
                Every department works together to ensure a smooth
                care journey, helping patients feel confident from
                their first visit to recovery and follow-up.
              </p>
            </Col>

            <Col lg={5}>
              <div className="statistics">

                <div className="stat-card">
                  <h3>25+</h3>
                  <p>Qualified Specialists</p>
                </div>

                <div className="stat-card">
                  <h3>10+</h3>
                  <p>Medical Departments</p>
                </div>

                <div className="stat-card">
                  <h3>24/7</h3>
                  <p>Emergency Support</p>
                </div>

              </div>
            </Col>

          </Row>

        </section>

      </Container>

      {/* Footer */}
      {/* <footer className="about-footer">

        <Row className="g-4">

          <Col lg={4} md={6}>
            <h2>MediCare Hospital</h2>

            <p>
              Compassionate healthcare with experienced doctors,
              modern facilities, and patient-first service for
              every family.
            </p>
          </Col>

          <Col lg={4} md={6}>
            <h2>Quick Links</h2>

            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/booking">Booking</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </Col>

          <Col lg={4} md={6}>
            <h2>Contact</h2>

            <p>Email: support@medicare.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: Chennai, India</p>
          </Col>

        </Row>

        <div className="about-copyright">
          © 2026 MediCare Hospital. All rights reserved.
        </div>

      </footer> */}

    </div>
  );
}

export default About;
