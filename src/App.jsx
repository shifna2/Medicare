
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/home";
import Doctors from "./components/Doctors";
import Department from "./components/department";
import About from "./components/about";
import Booking from "./components/booking";
import Contact from "./components/contact";
import Navbar from "./components/nav";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/department" element={<Department />} />
        <Route path="/departments" element={<Department />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
