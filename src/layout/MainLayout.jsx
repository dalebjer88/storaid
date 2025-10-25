import React from 'react';
import Header from './Header'; 
// import Footer from './Footer'; // Kommenterad tills den behövs

export default function MainLayout({ children }) {
  return (
    <div className="app-wrapper"> 
      
     
      <Header />
      
    
      <main className="page-content">
        {children} 
      </main>
      
      {/* <Footer /> */}
    </div>
  );
}