import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import StoraidLogo from "../assets/storaid-logo.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <NavLink to="/" className="navbar-logo">
            <img src={StoraidLogo} alt="Storaid Logotype"></img>
          </NavLink>
          <div className="navbar-links">
            <ul>
              <li>
                <NavLink to="/" className="navbar-link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="navbar-link">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="navbar-link">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="navbar-link">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/booking" className="btn btn--primary btn--on-light">
            Book Now
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
