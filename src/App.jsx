import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import MainLayout from './layout/MainLayout'; 
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import BookingPage from './pages/BookingPage';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        
        {/* 1. HomePage */}
        <Route path="/" element={<HomePage />} />
        
        {/* 2. AboutPage */}
        <Route path="/about" element={<AboutPage />} />
        
        {/* 3. ContactPage */}
        <Route path="/contact" element={<ContactPage />} />

        {/* 3. ServicesPage */}
        <Route path="/services" element={<ServicesPage />} />
        
        {/* 3. BookingPage */}
        <Route path="/booking" element={<BookingPage />} />
        
        {/* 404-sida */}
        <Route path="*" element={<h1>404: Sidan hittades inte</h1>} />

      </Route>
    </Routes>
  );
}

export default App;