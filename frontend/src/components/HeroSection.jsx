import React from 'react';
import { IconShoppingBag, IconClipboardList, IconTruck, IconLock, IconRefresh } from '@tabler/icons-react';

const HeroSection = () => {
  return (
    <section className="text-white py-32 relative overflow-hidden" style={{
      backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/035/719/146/large_2x/ai-generated-abstract-digital-city-with-circuit-board-on-dark-background-3d-rendering-abstract-futuristic-circuit-computer-internet-technology-board-business-dark-background-ai-generated-free-photo.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300 opacity-10 rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-7xl font-bold mb-6 animate-pulse">
          Welcome to <span className="text-yellow-300 drop-shadow-lg">E-Shop</span>
        </h1>
        <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed opacity-90">
          Discover amazing products at unbeatable prices. Shop the latest trends and enjoy fast, free shipping on orders over $50!
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-white text-purple-600 px-10 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-3 text-lg">
            <IconShoppingBag size={24} />
            <span>Shop Now</span>
          </button>
          <button className="border-2 border-white text-white px-10 py-4 rounded-2xl font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center space-x-3 text-lg backdrop-blur-sm bg-white/10">
            <IconClipboardList size={24} />
            <span>View Categories</span>
          </button>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/20 rounded-2xl p-8 backdrop-blur-md border border-white/20 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <IconTruck className="text-3xl" />
            </div>
            <h3 className="text-xl font-bold mb-2">Free Shipping</h3>
            <p className="text-white/80">On orders over $50</p>
          </div>
          <div className="bg-white/20 rounded-2xl p-8 backdrop-blur-md border border-white/20 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <IconLock className="text-3xl" />
            </div>
            <h3 className="text-xl font-bold mb-2">Secure Payment</h3>
            <p className="text-white/80">100% secure checkout</p>
          </div>
          <div className="bg-white/20 rounded-2xl p-8 backdrop-blur-md border border-white/20 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <IconRefresh className="text-3xl" />
            </div>
            <h3 className="text-xl font-bold mb-2">Easy Returns</h3>
            <p className="text-white/80">30-day return policy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;