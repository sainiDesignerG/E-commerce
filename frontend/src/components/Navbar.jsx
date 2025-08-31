import React from 'react';
import { IconShoppingBag, IconShoppingCart } from '@tabler/icons-react';
import { Link, Links } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to={'/'} className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <IconShoppingBag className="text-white text-lg" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                E-Shop
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200">Products</Link>
            <Link to="/cart" className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200">Cart</Link>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;