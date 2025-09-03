import React from 'react';
import { IconShoppingBag, IconShoppingCart } from '@tabler/icons-react';
import { Link, Links } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900/95 backdrop-blur-md border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to={'/'} className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <IconShoppingBag className="text-white text-lg" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                E-Shop
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-200">Home</Link>
            <Link to="/products" className="text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-200">Products</Link>
            <Link to="/cart" className="text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-200">Cart</Link>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;