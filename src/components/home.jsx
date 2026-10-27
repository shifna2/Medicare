import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* Navigation Bar */}
      {/* <nav className="home-navbar">
        <Link to="/" className="home-logo">MediCare</Link>

        <div className="home-nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/booking">Booking</Link>
          <Link to="/doctors">Doctors</Link>
          <Link to="/department">Department</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </nav> */}

      {/* Hospital Image Carousel */}
      <section className="home-carousel">
        <Carousel>
          <Carousel.Item>
            <div
              className="hero-slide"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(10,20,40,.85), rgba(10,20,40,.15)), url('https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1800&q=85')"
              }}
            >
              <div className="hero-content">
                <span className="hero-badge">Trusted Care</span>
                <h1>Advanced Hospital Care For Every Patient</h1>
                <p>
                  Modern facilities, expert doctors, and
                  compassionate service under one roof.
                </p>
                <Link to="/booking" className="hero-button">
                  Book Appointment →
                </Link>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div
              className="hero-slide"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(10,20,40,.85), rgba(10,20,40,.15)), url('https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1800&q=85')"
              }}
            >
              <div className="hero-content">
                <span className="hero-badge">Expert Specialists</span>
                <h1>Experienced Doctors You Can Trust</h1>
                <p>
                  Professional medical support focused on
                  your health and well-being.
                </p>
                <Link to="/doctors" className="hero-button">
                  Meet Our Doctors →
                </Link>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div
              className="hero-slide"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(10,20,40,.85), rgba(10,20,40,.15)), url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=85')"
              }}
            >
              <div className="hero-content">
                <span className="hero-badge">Here To Help</span>
                <h1>Quality Healthcare For Everyone</h1>
                <p>
                  Connect with skilled professionals across
                  multiple departments and specialties.
                </p>
                <Link to="/contact" className="hero-button">
                  Contact Us →
                </Link>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="welcome-text">
          <span className="section-badge">Welcome to MediCare</span>
          <h2>Welcome to MediCare Hospital</h2>
          <p>
            We provide quality medical services with advanced
            technology, compassionate healthcare professionals,
            and dedicated support for every patient and family.
          </p>
        </div>

        <div className="why-choose-card">
          <h2>Why Patients Choose Us</h2>
          <ul>
            <li>Experienced doctors across multiple specialties</li>
            <li>Modern diagnostic and treatment facilities</li>
            <li>Friendly staff and patient-centered service</li>
            <li>Reliable emergency and follow-up care</li>
          </ul>
        </div>
      </section>

      {/* Mission, Vision and Promise */}
      <section className="home-features">

        <div className="feature-card">
          <h3>Our Mission</h3>
          <p>
            To provide accessible, ethical, and high-quality
            medical care that improves the health of our community.
          </p>
        </div>

        <div className="feature-card">
          <h3>Our Vision</h3>
          <p>
            To be a trusted healthcare destination known for
            clinical excellence, compassion, and innovation.
          </p>
        </div>

        <div className="feature-card">
          <h3>Our Promise</h3>
          <p>
            We listen carefully, treat responsibly, and support
            every patient with respect and dedication.
          </p>
        </div>

        <div className="feature-card">
          <h3>Our Patients</h3>
          <p>
            Built around people, not just treatment.
            We provide personalized care for every individual.
          </p>
        </div>

      </section>

      {/* Appointment Banner */}
      <section className="home-appointment">
        <div>
          <h2>Need a quick appointment?</h2>
          <p>
            Visit our booking page to request a consultation
            with your preferred doctor.
          </p>
        </div>

        <Link to="/booking" className="appointment-link">
          Book Appointment →
        </Link>
      </section>

      {/* Footer */}
      {/* <footer className="home-footer">

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

      </footer> */}

    </div>
  );
}

export default Home;