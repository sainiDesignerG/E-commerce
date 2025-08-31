import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { IconShoppingCart, IconHeart, IconStar } from '@tabler/icons-react';

const ProductDetail = () => {
  const product = {
    id: 1,
    name: 'Premium Wireless Bluetooth Headphones',
    price: 89,
    originalPrice: 129,
    description: 'Experience superior sound quality with our premium wireless headphones featuring active noise cancellation, 30-hour battery life, and comfortable over-ear design. Perfect for music lovers and professionals alike.',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDUwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjI1MCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUI5QkE0IiBmb250LXNpemU9IjE4IiBmb250LWZhbWlseT0iQXJpYWwiPkhlYWRwaG9uZXM8L3RleHQ+Cjwvc3ZnPg==',
    category: 'Electronics',
    rating: 4.5,
    reviews: 128,
    features: [
      'Active Noise Cancellation',
      '30-hour Battery Life',
      'Bluetooth 5.0 Connectivity',
      'Comfortable Memory Foam Cushions',
      'Foldable Design for Travel',
      'Built-in Microphone for Calls'
    ],
    specifications: {
      'Driver Size': '40mm',
      'Frequency Response': '20Hz - 20kHz',
      'Impedance': '32Ω',
      'Weight': '250g',
      'Charging Time': '2 hours'
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-xl shadow-lg"
            />
            <div className="grid grid-cols-4 gap-2">
              {[1,2,3,4].map(i => (
                <img
                  key={i}
                  src={`https://via.placeholder.com/100x100?text=View${i}`}
                  alt={`View ${i}`}
                  className="w-full rounded-lg cursor-pointer hover:opacity-75 transition-opacity"
                />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                {product.category}
              </span>
              <h1 className="text-4xl font-bold text-text mt-4 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <IconStar key={i} size={20} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} />
                  ))}
                </div>
                <span className="text-gray-600">({product.reviews} reviews)</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-primary">${product.price}</span>
                <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                <span className="bg-danger text-white px-2 py-1 rounded text-sm font-semibold">
                  {Math.round((1 - product.price/product.originalPrice) * 100)}% OFF
                </span>
              </div>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>

            <div>
              <h3 className="text-xl font-semibold text-text mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-green-500 mr-3 text-lg">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-text mb-4">Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="bg-gray-50 p-3 rounded-lg">
                    <span className="text-sm text-gray-600">{key}</span>
                    <p className="font-semibold text-text">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="font-semibold text-text">Quantity:</label>
                <select className="border border-gray-300 rounded px-3 py-2">
                  {[1,2,3,4,5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              <div className="flex space-x-4">
                <button className="flex-1 bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                  <IconShoppingCart size={20} />
                  <span>Add to Cart</span>
                </button>
                <button className="flex-1 border-2 border-primary text-primary py-3 px-6 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors flex items-center justify-center space-x-2">
                  <IconHeart size={20} />
                  <span>Add to Wishlist</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;