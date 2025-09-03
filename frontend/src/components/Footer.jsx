import React from 'react';
import { IconBrandFacebook, IconBrandTwitter, IconBrandInstagram, IconBrandLinkedin, IconMail, IconPhone, IconMapPin } from '@tabler/icons-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                E-Shop
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for premium products and exceptional shopping experience. 
              Quality guaranteed, satisfaction delivered.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 p-2 rounded-full hover:bg-gray-800">
                <IconBrandFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 p-2 rounded-full hover:bg-gray-800">
                <IconBrandTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 p-2 rounded-full hover:bg-gray-800">
                <IconBrandInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 p-2 rounded-full hover:bg-gray-800">
                <IconBrandLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Categories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Deals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Blog</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Size Guide</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <IconMapPin size={18} className="text-cyan-400" />
                <span className="text-gray-400">123 Shopping St, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <IconPhone size={18} className="text-cyan-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <IconMail size={18} className="text-cyan-400" />
                <span className="text-gray-400">support@eshop.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Stay Updated</h3>
              <p className="text-gray-400">Subscribe to our newsletter for latest deals and updates</p>
            </div>
            <div className="flex space-x-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-200"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; 2024 E-Shop. All rights reserved. | 
            <a href="#" className="text-cyan-400 hover:text-cyan-300 ml-1">Privacy Policy</a> | 
            <a href="#" className="text-cyan-400 hover:text-cyan-300 ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;