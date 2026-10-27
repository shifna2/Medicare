import React from "react"
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./nav.css";

function Navbar(){
   return(

   <>

<nav className="home-navbar">
        <Link to="/" className="home-logo">MediCare</Link>

        <div className="home-nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/booking">Booking</Link>
          <Link to="/doctors">Doctors</Link>
          <Link to="/department">Department</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </nav>
      </>
      
      )
      }
export default Navbar;