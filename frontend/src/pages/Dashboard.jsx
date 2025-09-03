import React from 'react';
import { IconPackage, IconHeart, IconStar, IconUser, IconSettings, IconGift, IconLock, IconMapPin, IconCreditCard, IconBell, IconTruck, IconTrash, IconEdit, IconCopy } from '@tabler/icons-react';

const Dashboard = () => {
  const user = {
    name: 'Alex Fitness',
    email: 'alex@fitnesshub.com',
    joinDate: 'January 2024',
    avatar: 'https://images.unsplash.com/photo-1506629905607-c52b1a5e5b3a?w=100&h=100&fit=crop&crop=face'
  };

  const stats = [
    { title: 'Total Orders', value: '12', icon: IconPackage, color: 'from-cyan-500 to-blue-600' },
    { title: 'Wishlist Items', value: '8', icon: IconHeart, color: 'from-pink-500 to-red-600' },
    { title: 'Reviews Given', value: '5', icon: IconStar, color: 'from-yellow-500 to-orange-600' },
    { title: 'Workout Plans', value: '3', icon: IconTruck, color: 'from-green-500 to-emerald-600' }
  ];

  const recentOrders = [
    { id: '#12345', date: '2024-01-15', status: 'Delivered', total: '$89.99', product: 'Premium Yoga Mat' },
    { id: '#12344', date: '2024-01-10', status: 'Shipped', total: '$199.99', product: 'Fitness Tracker' },
    { id: '#12343', date: '2024-01-05', status: 'Processing', total: '$49.99', product: 'Resistance Bands' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            🏋️‍♀️ Welcome back, {user.name}!
          </h1>
          <p className="text-xl text-gray-300">Track your fitness journey and manage your orders.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl hover:border-cyan-400/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 font-medium mb-2">{stat.title}</p>
                  <p className="text-4xl font-bold text-white">{stat.value}</p>
                </div>
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${stat.color} text-white shadow-lg`}>
                  <stat.icon size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                <IconPackage className="mr-3 text-cyan-400" size={28} /> Recent Orders
              </h2>
              <div className="space-y-6">
                {recentOrders.map((order, index) => (
                  <div key={index} className="flex items-center justify-between p-6 border border-gray-600 rounded-2xl hover:border-cyan-400/50 hover:bg-gray-700/30 transition-all duration-200">
                    <div>
                      <p className="font-bold text-white text-lg">{order.id}</p>
                      <p className="text-cyan-400 font-medium">{order.product}</p>
                      <p className="text-gray-400 text-sm">{order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-cyan-400 text-xl mb-2">{order.total}</p>
                      <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        order.status === 'Delivered' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                        order.status === 'Shipped' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                        'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-2xl font-bold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                View All Orders
              </button>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                <IconHeart className="mr-3 text-pink-400" size={24} /> Wishlist
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: 'Yoga Mat Pro', price: '$89.99', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=60&h=60&fit=crop' },
                  { name: 'Resistance Bands', price: '$39.99', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=60&h=60&fit=crop' },
                  { name: 'Sports Bra', price: '$45.99', image: 'https://images.unsplash.com/photo-1506629905607-c52b1a5e5b3a?w=60&h=60&fit=crop' },
                  { name: 'Gym Bag', price: '$79.99', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=60&h=60&fit=crop' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 border border-gray-600 rounded-lg hover:border-cyan-400/50 transition-colors">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-white">{item.name}</p>
                      <p className="text-cyan-400 font-bold text-sm">{item.price}</p>
                    </div>
                    <button className="text-red-400 hover:text-red-300 transition-colors">
                      <IconTrash size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                <IconUser className="mr-3 text-cyan-400" size={24} /> Account Information
              </h2>
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={user.avatar}
                  alt="Profile"
                  className="w-16 h-16 rounded-full border-2 border-cyan-400"
                />
                <div>
                  <p className="font-semibold text-white">{user.name}</p>
                  <p className="text-sm text-cyan-400">{user.email}</p>
                  <p className="text-xs text-gray-400">Member since {user.joinDate}</p>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center justify-center space-x-2">
                <IconEdit size={16} />
                <span>Edit Profile</span>
              </button>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                <IconSettings className="mr-3 text-cyan-400" size={24} /> Account Settings
              </h2>
              <div className="space-y-3">
                <button className="w-full text-left p-3 hover:bg-gray-700/50 rounded-lg transition-colors text-gray-300 hover:text-white flex items-center space-x-3">
                  <IconLock size={18} className="text-cyan-400" />
                  <span>Change Password</span>
                </button>
                <button className="w-full text-left p-3 hover:bg-gray-700/50 rounded-lg transition-colors text-gray-300 hover:text-white flex items-center space-x-3">
                  <IconMapPin size={18} className="text-cyan-400" />
                  <span>Manage Addresses</span>
                </button>
                <button className="w-full text-left p-3 hover:bg-gray-700/50 rounded-lg transition-colors text-gray-300 hover:text-white flex items-center space-x-3">
                  <IconCreditCard size={18} className="text-cyan-400" />
                  <span>Payment Methods</span>
                </button>
                <button className="w-full text-left p-3 hover:bg-gray-700/50 rounded-lg transition-colors text-gray-300 hover:text-white flex items-center space-x-3">
                  <IconBell size={18} className="text-cyan-400" />
                  <span>Notification Preferences</span>
                </button>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                <IconGift className="mr-3 text-cyan-400" size={24} /> Special Offers
              </h2>
              <div className="text-center">
                <div className="text-4xl mb-2">🎉</div>
                <p className="text-sm text-gray-300 mb-4">Get 10% off your next fitness gear with code FITNESS10</p>
                <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all flex items-center justify-center space-x-2 w-full">
                  <IconCopy size={16} />
                  <span>Copy Code</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;