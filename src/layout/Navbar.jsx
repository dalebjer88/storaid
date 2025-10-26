import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';
import StoraidLogo from '../assets/storaid-logo.svg';
        
function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-content">
            <Link to="/" className="navbar-logo"><img src={StoraidLogo} alt="Storaid Logotype"></img></Link>
              <div className="navbar-links">
                <ul>
                  <li><Link to="/" className="navbar-link" aria-current="page">Home</Link></li> 
                  <li><Link to="/about" className="navbar-link">About Us</Link></li>
                  <li><Link to="/services" className="navbar-link">Services</Link></li>
                  <li><Link to="/contact" className="navbar-link">Contact Us</Link></li>
                </ul>
              </div>
              <Link to="/booking" className="btn btn--primary btn--on-light">Book Now</Link>
            </div>  
        </div>
    </nav>
  );
}

export default Navbar;