import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroSection from "../components/HeroSection";
import SubscribeSection from "../components/SubscribeSection";

const MainLayout = ({ heroProps }) => {
  return (
    <>
      <Header />
      <Navbar />
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
