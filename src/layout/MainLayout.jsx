import React from 'react';
import Header from './Header';
import Navbar from './Navbar'; 

export default function MainLayout({ children }) {
  return (
    <div className="app-wrapper"> 
      
     
      <Header />
      <Navbar />
    
      <main className="page-content">
        {children} 
      </main>
      
      {/* <Footer /> */}
    </div>
  );
}