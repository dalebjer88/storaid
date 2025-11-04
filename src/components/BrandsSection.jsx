import React from "react";
import "./BrandsSection.css";
import logo1 from "../assets/logoipsum1.svg";
import logo2 from "../assets/logoipsum2.svg";
import logo3 from "../assets/logoipsum3.svg";
import logo4 from "../assets/logoipsum4.svg";
import logo5 from "../assets/logoipsum5.svg";

const BrandsSection = () => {
  return (
    <section className="brands-section">
      <div className="container">
        <div className="brands-content">
          <a href="https://logoipsum.com/">
            <img src={logo1} alt="Logo Ipsum brand 1" />
          </a>
          <a href="https://logoipsum.com/">
            <img src={logo2} alt="Logo Ipsum brand 2" />
          </a>
          <a href="https://logoipsum.com/">
            <img src={logo3} alt="Logo Ipsum brand 3" />
          </a>
          <a href="https://logoipsum.com/">
            <img src={logo4} alt="Logo Ipsum brand 4" />
          </a>
          <a href="https://logoipsum.com/">
            <img src={logo5} alt="Logo Ipsum brand 5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
