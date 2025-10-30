import React from 'react';
import './HeroSection.css';

export default function HeroSection({ preTitle, title, subtitle, ctaButton, image }) {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="container"> 
        <div className="hero-content">
          <div className="hero-content-wrapper">
            {preTitle && <h4 className="hero-pretitle">{preTitle}</h4>}
            <h1 id="hero-heading" className="hero-title">
              {title}
            </h1>
            <p className="hero-subtitle">
              {subtitle}
            </p>
            {ctaButton && (
              <div className="hero-actions">
                {ctaButton}
              </div>
            )}
          </div>
          {image && (
            <div className="hero-image-container">
              {image}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
