import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { IconShoppingBag } from '@tabler/icons-react';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Premium Yoga Mat',
      price: 89,
      originalPrice: 129,
      description: 'Non-slip premium yoga mat perfect for all types of workouts and yoga sessions.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop&crop=center',
      category: 'Fitness'
    },
    {
      id: 2,
      name: 'Resistance Bands Set',
      price: 39,
      originalPrice: 59,
      description: 'Complete resistance bands set for strength training and muscle building.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center',
      category: 'Equipment'
    },
    {
      id: 3,
      name: 'Athletic Sports Bra',
      price: 45,
      originalPrice: 65,
      description: 'High-support sports bra designed for intense workouts and maximum comfort.',
      image: 'https://images.unsplash.com/photo-1506629905607-c52b1a5e5b3a?w=400&h=300&fit=crop&crop=center',
      category: 'Apparel'
    },
    {
      id: 4,
      name: 'Protein Shaker Bottle',
      price: 25,
      originalPrice: 35,
      description: 'BPA-free protein shaker with mixing ball for smooth protein shakes.',
      image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=300&fit=crop&crop=center',
      category: 'Nutrition'
    },
    {
      id: 5,
      name: 'Gym Duffel Bag',
      price: 79,
      originalPrice: 99,
      description: 'Spacious gym bag with separate compartments for shoes and wet clothes.',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop&crop=center',
      category: 'Accessories'
    },
    {
      id: 6,
      name: 'Wireless Fitness Tracker',
      price: 199,
      originalPrice: 249,
      description: 'Advanced fitness tracker with heart rate monitoring and workout tracking.',
      image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=300&fit=crop&crop=center',
      category: 'Technology'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <HeroSection />

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
              Featured Products
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Discover our handpicked selection of premium products crafted for quality and style
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-12 py-4 rounded-2xl font-bold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/25 flex items-center justify-center space-x-3 text-lg mx-auto">
              <IconShoppingBag size={24} />
              <span>View All Products</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;