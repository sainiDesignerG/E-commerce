import React from 'react';
import { IconShoppingCart, IconHeart, IconStar } from '@tabler/icons-react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 group">
      <div className="relative overflow-hidden">
        <img
          src={product.image || 'https://via.placeholder.com/300x200/6366f1/ffffff?text=Product'}
          alt={product.name}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
            {product.category || 'New'}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
          {product.description}
        </p>
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-purple-600">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
            )}
          </div>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 font-semibold">
            <IconShoppingCart size={18} />
            <span>Add</span>
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <IconStar key={i} size={16} fill={i < 4 ? 'currentColor' : 'none'} />
              ))}
            </div>
            <span className="text-sm text-gray-600 font-medium">(4.5)</span>
          </div>
          <button className="text-gray-400 hover:text-red-500 transition-colors duration-200 p-2 rounded-full hover:bg-red-50">
            <IconHeart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;