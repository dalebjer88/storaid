import React from "react";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import SecureSection from "../components/SecureSection";
import FaqSection from "../components/FaqSection";

const ServicesPage = () => {
  return (
    <>
      <ServicesSection />
      <TestimonialsSection showBackgrondImage={false} />
      <FaqSection/>
      <SecureSection />
    </>
  );
};

export default ServicesPage;
