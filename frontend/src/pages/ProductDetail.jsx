import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { IconShoppingCart, IconHeart, IconStar, IconMinus, IconPlus, IconTruck, IconShield, IconRefresh } from '@tabler/icons-react';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    id: 1,
    name: 'Premium Yoga Mat Pro',
    price: 89,
    originalPrice: 129,
    description: 'Experience ultimate comfort and stability with our premium yoga mat featuring superior grip technology, eco-friendly materials, and perfect cushioning. Ideal for all yoga styles and fitness routines.',
    images: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1506629905607-c52b1a5e5b3a?w=600&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=600&h=600&fit=crop&crop=center'
    ],
    category: 'Fitness',
    rating: 4.8,
    reviews: 256,
    features: [
      'Non-slip surface technology',
      'Extra thick 6mm cushioning',
      'Eco-friendly TPE material',
      'Lightweight and portable',
      'Easy to clean surface',
      'Alignment guides included'
    ],
    specifications: {
      'Material': 'TPE (Thermoplastic Elastomer)',
      'Thickness': '6mm',
      'Dimensions': '183cm x 61cm',
      'Weight': '1.2kg',
      'Grip Level': 'Superior'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute top-4 right-4">
                <button className="bg-gray-900/80 backdrop-blur-sm text-white p-2 rounded-full hover:bg-red-600 transition-colors">
                  <IconHeart size={20} />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative overflow-hidden rounded-lg border-2 transition-all ${
                    selectedImage === index 
                      ? 'border-cyan-400 shadow-lg shadow-cyan-400/25' 
                      : 'border-gray-600 hover:border-gray-500'
                  }`}
                >
                  <img
                    src={image}
                    alt={`View ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {product.category}
              </span>
              <h1 className="text-4xl font-bold text-white mt-6 mb-4">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <IconStar key={i} size={20} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} />
                  ))}
                </div>
                <span className="text-cyan-400 font-semibold">{product.rating}</span>
                <span className="text-gray-400">({product.reviews} reviews)</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">${product.price}</span>
                <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {Math.round((1 - product.price/product.originalPrice) * 100)}% OFF
                </span>
              </div>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <p className="text-gray-300 text-lg leading-relaxed">{product.description}</p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 w-1 h-6 rounded-full mr-3"></span>
                Key Features
              </h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center group">
                    <span className="text-cyan-400 mr-4 text-lg group-hover:scale-110 transition-transform">✓</span>
                    <span className="text-gray-300 group-hover:text-white transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 w-1 h-6 rounded-full mr-3"></span>
                Specifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="bg-gray-700/50 p-4 rounded-lg border border-gray-600 hover:border-cyan-400/50 transition-colors">
                    <span className="text-sm text-cyan-400 font-medium">{key}</span>
                    <p className="font-semibold text-white mt-1">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 space-y-6">
              <div className="flex items-center justify-between">
                <label className="font-semibold text-white">Quantity:</label>
                <div className="flex items-center space-x-3 bg-gray-700/50 rounded-lg p-1">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 text-cyan-400 hover:bg-cyan-400 hover:text-white rounded-md transition-colors"
                  >
                    <IconMinus size={16} />
                  </button>
                  <span className="w-12 text-center text-white font-semibold">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 text-cyan-400 hover:bg-cyan-400 hover:text-white rounded-md transition-colors"
                  >
                    <IconPlus size={16} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25">
                  <IconShoppingCart size={20} />
                  <span>Add to Cart</span>
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 py-4 px-6 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Buy Now</span>
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-700">
                <div className="flex items-center space-x-2 text-gray-300">
                  <IconTruck size={16} className="text-cyan-400" />
                  <span className="text-sm">Free Shipping</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <IconShield size={16} className="text-cyan-400" />
                  <span className="text-sm">2 Year Warranty</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <IconRefresh size={16} className="text-cyan-400" />
                  <span className="text-sm">30 Day Return</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;