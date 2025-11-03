import React from 'react';
import AboutSection from '../components/AboutSection';
import BrandsSection from '../components/BrandsSection';
import TestimonialsSection from '../components/TestimonialsSection';


const AboutPage = () => {
    return (
        <>
        <AboutSection/>
        <BrandsSection/>
        <TestimonialsSection showBackgrondImage={false}/>
        </>
    );
};

export default AboutPage;