import React from "react";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import SecureSection from "../components/SecureSection";

const ServicesPage = () => {
  return (
    <>
      <ServicesSection />
      <TestimonialsSection showBackgrondImage={false} />
      <SecureSection />
    </>
  );
};

export default ServicesPage;
