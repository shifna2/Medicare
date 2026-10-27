import React from "react";
import { Link } from "react-router-dom";
import "./doctors.css";

const doctors = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    specialization: "Cardiologist",
    department: "Cardiology",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600",
  },
  {
    id: 2,
    name: "Dr. Meera Joseph",
    specialization: "Child Health and Vaccination Specialist",
    department: "Pediatrics",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600",
  },
  {
    id: 3,
    name: "Dr. Manoj Varma",
    specialization: "Dermatologist",
    department: "Dermatology",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600",
  },
  {
    id: 4,
    name: "Dr. Priya Nair",
    specialization: "Ear and Hearing Specialist",
    department: "ENT",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600",
  },
  {
    id: 5,
    name: "Dr. Shalini Gupta",
    specialization: "Diagnostic Imaging Specialist",
    department: "Radiology",
    image:
      "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=600",
  },
  {
    id: 6,
    name: "Dr. Neha Reddy",
    specialization: "Stroke and Brain Disorders Specialist",
    department: "Neurology",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600",
  },
];

export default function Doctors() {
  return (
    <div className="doctors-app">
      {/* Navbar */}
      {/* <nav className="doctors-navbar">
        <h1 className="doctors-logo">MediCare</h1>

        <div className="doctors-nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/booking">Booking</Link>
          <Link to="/doctors">Doctors</Link>
          <Link to="/department">Department</Link>
          <Link to="/contact">Contact Us</Link>
         
        </div>
      </nav> */}

      {/* Doctors Section */}
      <main className="doctors-page">
        <h2>Our Doctors</h2>

        <p className="doctors-description">
          Meet our specialists across departments and explore their areas of expertise.
        </p>

        <div className="doctors-grid">
          {doctors.map((doctor) => (
            <article className="doctor-card" key={doctor.id}>
              <img
                src={doctor.image}
                alt={doctor.name}
                className="doctor-image"
              />

              <div className="doctor-info">
                <h3>{doctor.name}</h3>

                <p>
                  <strong>Specialization:</strong>{" "}
                  {doctor.specialization}
                </p>

                <p>
                  <strong>Department:</strong>{" "}
                  {doctor.department}
                </p>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="doctors-footer">
        <div className="doctors-footer-grid">
          <div>
            <h2>MediCare Hospital</h2>
            <p>
              Compassionate healthcare with experienced doctors,
              modern facilities, and patient-first service for every family.
            </p>
          </div>

          <div>
            <h2>Quick Links</h2>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/booking">Booking</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          <div>
            <h2>Contact</h2>
            <p>Email: support@medicare.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: Chennai, India</p>
          </div>
        </div>

        <div className="doctors-copyright">
          © 2026 MediCare Hospital. All rights reserved.
        </div>
      </footer> */}
    </div>
  );
}