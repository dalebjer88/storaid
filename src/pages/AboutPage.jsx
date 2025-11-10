import AboutSection from "../components/AboutSection";
import BrandsSection from "../components/BrandsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import WcuSection from "../components/WcuSection";

const AboutPage = () => {
  return (
    <>
      <AboutSection />
      <BrandsSection />
      <TestimonialsSection showBackgrondImage={false} />
      <WcuSection bgVariant="about" />
    </>
  );
};

export default AboutPage;
