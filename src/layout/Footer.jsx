import React from 'react';
import './Footer.css';
import '../assets/footer-icon.svg';

const currentYear = 2025;
const ArrowIcon = (

    //**svg code clipped from chatgpt*/
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="footer-icon"> 
        <circle cx="7.5" cy="7.5" r="7.5" fill="currentColor"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M10.0981 7.94428L6.56246 11.4799L5.67871 10.5962L8.77246 7.5024L5.67871 4.40865L6.56246 3.5249L10.0981 7.06053C10.2153 7.17773 10.2811 7.33667 10.2811 7.5024C10.2811 7.66813 10.2153 7.82707 10.0981 7.94428Z" fill="var(--color-secondary)"/>
    </svg>
);
        
function Footer() {
  return (
    <div className="footer">
        <div className="container">
            <div className ="footer-content">
                <div className="footer-brand">
                    <p className="footer-copyright">
                        © {currentYear} StorAid. All rights reserved.
                    </p>
                </div>
                <nav className="footer-links" aria-label="Legal information">
                    <ul className="footer-list">
                        <li className="footer-list-item">
                            <a href="/terms" className="footer-link">{ArrowIcon}Terms & Conditions</a>
                        </li>
                        <li className="footer-list-item">
                            <a href="/privacy" className="footer-link">{ArrowIcon}Privacy Policy</a>
                        </li>
                    </ul>
                </nav>
           </div>
        </div>
    </div>
  );
}

export default Footer;