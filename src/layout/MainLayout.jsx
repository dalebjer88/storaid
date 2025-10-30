import React from 'react';
import { Outlet } from 'react-router-dom'; 
import Header from './Header'; 
import Navbar from './Navbar'; 
import Footer from './Footer';
import HeroSection from '../components/HeroSection';

const MainLayout = ({ heroProps }) => {
  return (
    <>
      <Header />
      <Navbar /> 
      <main>
        {heroProps && <HeroSection {...heroProps} />}    
        <Outlet /> 
      </main>
      <Footer /> 
    </>
  );
};

export default MainLayout;
