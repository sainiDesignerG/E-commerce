import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const WebsiteLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default WebsiteLayout;