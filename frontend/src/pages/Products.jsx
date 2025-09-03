import React, { useState } from 'react';
import { IconSearch, IconFilter, IconList, IconGrid3x3 } from '@tabler/icons-react';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Fitness products data
  const products = [
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
    },
    {
      id: 7,
      name: 'Workout Leggings',
      price: 55,
      originalPrice: 75,
      description: 'High-waisted compression leggings with moisture-wicking fabric.',
      image: 'https://images.unsplash.com/photo-1506629905607-c52b1a5e5b3a?w=400&h=300&fit=crop&crop=center',
      category: 'Apparel'
    },
    {
      id: 8,
      name: 'Adjustable Dumbbells',
      price: 299,
      originalPrice: 399,
      description: 'Space-saving adjustable dumbbells for home gym workouts.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center',
      category: 'Equipment'
    },
    {
      id: 9,
      name: 'Pre-Workout Supplement',
      price: 35,
      originalPrice: 45,
      description: 'Natural pre-workout supplement for enhanced energy and focus.',
      image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=300&fit=crop&crop=center',
      category: 'Nutrition'
    }
  ];

  const categories = ['all', 'Fitness', 'Equipment', 'Apparel', 'Nutrition', 'Technology', 'Accessories'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            Our Products
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover our complete collection of premium products
          </p>
        </div>

        {/* Filters */}
        <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <IconFilter className="text-gray-400" size={20} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* View Mode */}
            <div className="flex items-center space-x-2 bg-gray-700 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-cyan-500 shadow-md text-white' : 'text-gray-400'
                }`}
              >
                <IconGrid3x3 size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-cyan-500 shadow-md text-white' : 'text-gray-400'
                }`}
              >
                <IconList size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-8 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No products found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;