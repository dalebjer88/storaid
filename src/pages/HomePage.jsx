import React from 'react';
import AboutSection from '../components/AboutSection';

export default function HomePage() {
  return (
    <>
      {/* WCAG: SR-only */}
      <h2 className="sr-only">Startsida - StorAid</h2> 
      <AboutSection/>
     
    </>
  );
}
