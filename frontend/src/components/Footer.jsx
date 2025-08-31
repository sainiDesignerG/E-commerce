import React from 'react';
import { IconShoppingBag, IconMail, IconPhone } from '@tabler/icons-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <IconShoppingBag className="text-white text-xl" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                E-Shop
              </span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Your ultimate shopping destination offering premium products with exceptional service and unbeatable prices.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-lg">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-lg">Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-lg">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-lg">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3">
                  <IconMail size={18} className="text-purple-400" />
                </div>
                <span className="text-gray-300">support@eshop.com</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3">
                  <IconPhone size={18} className="text-purple-400" />
                </div>
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-lg">&copy; 2024 E-Shop. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;