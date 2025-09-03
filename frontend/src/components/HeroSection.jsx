import React from 'react';
import { IconArrowRight, IconShoppingBag, IconStar } from '@tabler/icons-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-600 shadow-lg">
            <IconStar className="text-yellow-400 mr-2" size={20} />
            <span className="text-sm font-medium text-gray-300">Trusted by 10,000+ customers</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
              Shop Smart,
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Live Better
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover premium products at unbeatable prices. From electronics to fashion, 
            we've got everything you need to elevate your lifestyle.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <button className="group bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-12 py-4 rounded-2xl font-bold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/25 flex items-center space-x-3">
              <IconShoppingBag size={24} />
              <span>Start Shopping</span>
              <IconArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="bg-gray-800/80 backdrop-blur-sm text-gray-300 px-12 py-4 rounded-2xl font-bold text-lg border border-gray-600 hover:bg-gray-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-600 shadow-lg">
              <div className="text-3xl font-bold text-white">50K+</div>
              <div className="text-gray-400 font-medium">Happy Customers</div>
            </div>
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-600 shadow-lg">
              <div className="text-3xl font-bold text-white">1000+</div>
              <div className="text-gray-400 font-medium">Premium Products</div>
            </div>
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-600 shadow-lg">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-gray-400 font-medium">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;