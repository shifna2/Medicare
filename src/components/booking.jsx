
import React from "react";
import "./Booking.css";

function Booking() {
  return (
    <div className="booking-page">

      {/* Navbar */}
      {/* <nav className="booking-navbar">
        <h2>MediCare</h2>

        <div className="booking-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/booking">Booking</a>
          <a href="/doctors">Doctors</a>
          <a href="/departments">Departments</a>
          <a href="/contact">Contact Us</a>
                 </div>
      </nav> */}

      {/* Booking Form */}
      <div className="booking-container">

        <h1>Book an Appointment</h1>

        <p>
          Fill in your details and choose a doctor to request an appointment.
        </p>

        <form onSubmit={(e) => {
          e.preventDefault();
          alert("Appointment booking submitted successfully!");
        }}>

          <label htmlFor="name">Patient Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            pattern="[0-9]{10}"
            maxLength="10"
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="doctor">Select Doctor</label>
          <select id="doctor" name="doctor" required>
            <option value="">Choose a doctor</option>
            <option value="Dr. Arun">Dr. Arun - Cardiologist</option>
            <option value="Dr. Priya">Dr. Priya - Neurologist</option>
            <option value="Dr. Rahul">Dr. Rahul - Orthopedic</option>
            <option value="Dr. Meera">Dr. Meera - Pediatrician</option>
          </select>

          <label htmlFor="date">Booking Date</label>
          <input
            type="date"
            id="date"
            name="date"
            min={new Date().toLocaleDateString("en-CA")}
            required
          />

          <button type="submit">
            Submit Booking
          </button>

        </form>
      </div>

      {/* Footer */}
      {/* <footer className="booking-footer">

        <div>
          <h3>MediCare Hospital</h3>
          <p>
            Compassionate healthcare with experienced doctors, modern
            facilities, and patient-first service for every family.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/booking">Booking</a>
          <a href="/contact">Contact Us</a>
        </div>

        <div>
          <h3>Contact</h3>
          <p>Email: support@medicare.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Chennai, India</p>
        </div>

        <p className="copyright">
          © 2026 MediCare Hospital. All rights reserved.
        </p>

      </footer> */}

    </div>
  );
}

export default Booking;