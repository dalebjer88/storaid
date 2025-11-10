import "./Header.css";
import PhoneIcon from "../assets/phone-icon.svg";
import MailIcon from "../assets/mail-icon.svg";
import SocialLinks from "../components/SocialLinks";

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
          <SocialLinks />
        </div>
      </div>
    </header>
  );
}

export default Header;
