import React from 'react';
import './Navbar.css';
import StoraidLogo from '../assets/storaid-logo.svg';
        
function Navbar() {
  return (
    <div className="navbar">
        <div className="container">
            <img src={StoraidLogo} alt="Storaid Logotype"></img>
            <nav className="main-nav"></nav>
            <button></button>
        </div>
    </div>
  );
}

export default Navbar;