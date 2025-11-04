import React from "react";
import { Link } from "react-router-dom";
import "./SecureSection.css";

export const SecureSection = () => {
  return (
    <section className="secure-section">
      <div className="container">
        <div className="secure-content">
          <h3>
            Looking for Secure and Flexible Storage? Find Your Perfect Fit With
            Us.
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris
            ac blandit nisi non sodales augue. Phasellus eget elit gravida.
          </p>
          <Link to="/booking" className="btn btn--primary btn--on-dark">
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SecureSection;
