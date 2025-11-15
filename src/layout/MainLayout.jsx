import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroSection from "../components/HeroSection";
import SubscribeSection from "../components/SubscribeSection";
import useHideOnScroll from "../hooks/UseHideOnScroll";

const MainLayout = ({ heroProps }) => {
  const hidden = useHideOnScroll();
  return (
    <>
      <div className={`top-wrapper ${hidden ? "top-wrapper-hidden" : ""}`}>
        <Header />
        <Navbar />
      </div>
      <main>
        {heroProps && <HeroSection {...heroProps} />}
        <Outlet />
        <SubscribeSection />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
