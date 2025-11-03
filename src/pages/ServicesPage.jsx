import React from 'react';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';

const ServicesPage = () => {
    return (
        <>
        <ServicesSection/>
        <TestimonialsSection showBackgrondImage={false}/>
        </>
    );
};

export default ServicesPage; 