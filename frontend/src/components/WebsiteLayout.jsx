import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const WebsiteLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default WebsiteLayout;