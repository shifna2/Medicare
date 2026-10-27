
import React from "react";
import "./Department.css";

function Department() {
  return (
    <div className="department-page">

      {/* Navbar */}
      {/* <nav className="department-navbar">
        <h2>MediCare</h2>

        <div className="department-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/booking">Booking</a>
          <a href="/doctors">Doctors</a>
          <a href="/department">Department</a>
          <a href="/contact">Contact Us</a>
          
        </div>
      </nav> */}

      {/* Departments Section */}
      <main className="department-content">

        <h1>Hospital Department</h1>

        <p className="department-intro">
          Explore our medical departments and the services available
          for patients.
        </p>

        <div className="department-container">

          {/* Card 1 */}
          <div className="department-card">
            <h2>Cardiology</h2>
            <p>
              The Cardiology Department specializes in diagnosing and
              treating diseases related to the heart and blood vessels.
              It manages conditions such as heart attacks, hypertension
              (high blood pressure), heart failure, and irregular
              heartbeats using advanced medical equipment.
            </p>
          </div>

          {/* Card 2 */}
          <div className="department-card">
            <h2>Neurology</h2>
            <p>
              The Neurology Department deals with disorders of the brain,
              spinal cord, and nervous system. It treats conditions like
              stroke, epilepsy, Parkinson’s disease, headaches, and nerve
              injuries. Doctors use specialized tests to diagnose
              neurological problems.
            </p>
          </div>

          {/* Card 3 */}
          <div className="department-card">
            <h2>Orthopedics</h2>
            <p>
              The Orthopedics Department focuses on the treatment of
              bones, joints, muscles, ligaments, and fractures. It provides
              care for injuries caused by accidents, sports injuries,
              arthritis, and bone deformities. This department also
              performs surgeries like joint replacement.
            </p>
          </div>

          {/* Card 4 */}
          <div className="department-card">
            <h2>Pediatrics</h2>
            <p>
              The Pediatrics Department provides medical care for infants,
              children, and teenagers. It handles vaccinations, growth
              monitoring, childhood illnesses, and developmental
              disorders. Pediatricians ensure the healthy growth and
              development of children.
            </p>
          </div>

          {/* Card 5 */}
          <div className="department-card">
            <h2>Radiology</h2>
            <p>
              The Radiology Department uses medical imaging technologies
              such as X-rays, CT scans, MRI scans, and ultrasound to
              diagnose diseases and injuries. Radiologists analyze images
              and provide reports to doctors for accurate diagnosis and
              treatment planning.
            </p>
          </div>

          {/* Card 6 */}
          <div className="department-card">
            <h2>Dermatology</h2>
            <p>
              The Dermatology Department treats skin, hair, and nail
              conditions such as acne, infections, allergies, eczema,
              and skin diseases. Dermatologists also provide cosmetic
              treatments and skin care advice.
            </p>
          </div>

          {/* Card 7 */}
          <div className="department-card">
            <h2>ENT</h2>
            <p>
              The ENT Department specializes in treating conditions
              affecting the ears, nose, and throat. It provides care
              for hearing problems, sinus infections, throat infections,
              allergies, and related conditions.
            </p>
          </div>

        </div>
      </main>

      {/* Footer */}
      {/* <footer className="department-footer">

        <div className="footer-content">

          <div className="footer-column">
            <h2>MediCare Hospital</h2>
            <p>
              Compassionate healthcare with experienced doctors,
              modern facilities, and patient-first service for every family.
            </p>
          </div>

          <div className="footer-column">
            <h2>Quick Links</h2>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/booking">Booking</a>
            <a href="/contact">Contact Us</a>
          </div>

          <div className="footer-column">
            <h2>Contact</h2>
            <p>Email: support@medicare.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: Chennai, India</p>
          </div>

        </div>

        <div className="copyright">
          © 2026 MediCare Hospital. All rights reserved.
        </div>

      </footer> */}

    </div>
  );
}

export default Department;
