import React from 'react';
import AboutSection from '../components/AboutSection';
import BrandsSection from '../components/BrandsSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import WcuSection from '../components/WcuSection';
import PricingSection from '../components/PricingSection';

export default function HomePage() {
  return (
    <>
    {/* WCAG: SR-only */}
    <h2 className="sr-only">Startsida - StorAid</h2> 
    <AboutSection/>
    <BrandsSection/>
    <ServicesSection/>
    <TestimonialsSection showBackgroundImage={true}/>
    <WcuSection bgVariant ="home"/>
    <PricingSection/>
    </>
  );
}
