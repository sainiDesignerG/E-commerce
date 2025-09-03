import React from 'react';
import { IconShoppingCart, IconHeart, IconStar } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="group bg-gray-800/60 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-700">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            -{discount}%
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <button className="bg-gray-900/80 backdrop-blur-sm p-2 rounded-full hover:bg-gray-800 transition-colors duration-200 shadow-lg">
            <IconHeart size={20} className="text-gray-300 hover:text-red-400 transition-colors" />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-2">
          <span className="text-sm text-cyan-400 font-semibold bg-cyan-500/20 px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
          {product.name}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <IconStar key={i} size={16} fill="currentColor" />
            ))}
          </div>
          <span className="text-gray-500 text-sm ml-2">(4.8)</span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">${product.price}</span>
            <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Link 
            to={`/product/${product.id}`}
            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 text-center shadow-lg hover:shadow-cyan-500/25"
          >
            View Details
          </Link>
          <button className="bg-gray-700 hover:bg-gray-600 p-3 rounded-xl transition-colors duration-200">
            <IconShoppingCart size={20} className="text-gray-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;