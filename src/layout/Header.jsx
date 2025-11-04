import React from "react";
import "./Header.css";
import PhoneIcon from "../assets/phone-icon.svg";
import MailIcon from "../assets/mail-icon.svg";
import FacebookIcon from "../assets/facebook-button.svg";
import HumbleIcon from "../assets/humble-button.svg";
import InstagramIcon from "../assets/instagram-button.svg";
import YoutubeIcon from "../assets/youtube-button.svg";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="contact-info">
            <a className="contact-pair" href="tel:0046812312244">
              <img src={PhoneIcon} />
              <span className="header-text">+46 8 123 122 44</span>
            </a>
            <a className="contact-pair" href="mailto:contact@domain.com">
              <img src={MailIcon} />
              <span className="header-text">contact@domain.com</span>
            </a>
          </div>
          <nav className="social-links">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={FacebookIcon}
                alt="Facebook"
                aria-label="Visit us on Facebook"
              />
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
              <img src={HumbleIcon} alt="X.com" aria-label="Visit us on X" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={InstagramIcon}
                alt="Instagram "
                aria-label="Visit us on Instagram"
              />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={YoutubeIcon}
                alt="Youtube"
                aria-label="Visit us on Youtube"
              />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
