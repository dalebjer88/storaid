import React from 'react';
import './Navbar.css';
import StoraidLogo from '../assets/storaid-logo.svg';
        
function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-content">
              <a href ="/" className="navbar-logo"><img src={StoraidLogo} alt="Storaid Logotype"></img></a>
              <div className="navbar-links">
                <ul>
                  <li><a href="/" aria-current="page">Home</a></li> 
                  <li><a href="/about-us">About Us</a></li>
                  <li><a href="/services">Services</a></li>
                  <li><a href="/contact-us">Contact Us</a></li>
                </ul>
              </div>
              <a href="/booking" className="btn btn--primary btn--on-light">Book Now</a>
            </div>  
        </div>
    </nav>
  );
}

export default Navbar;