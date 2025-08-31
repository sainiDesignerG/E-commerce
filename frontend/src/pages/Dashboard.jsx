import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { IconPackage, IconHeart, IconStar, IconUser, IconSettings, IconGift, IconLock, IconMapPin, IconCreditCard, IconBell, IconConfetti, IconTrash } from '@tabler/icons-react';

const Dashboard = () => {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    joinDate: 'January 2024',
    avatar: 'https://via.placeholder.com/100x100?text=JD'
  };

  const stats = [
    { title: 'Total Orders', value: '12', icon: '📦', color: 'bg-blue-500' },
    { title: 'Wishlist Items', value: '8', icon: '❤️', color: 'bg-red-500' },
    { title: 'Reviews Given', value: '5', icon: '⭐', color: 'bg-yellow-500' },
    { title: 'Saved Addresses', value: '2', icon: '📍', color: 'bg-green-500' }
  ];

  const recentOrders = [
    { id: '#12345', date: '2024-01-15', status: 'Delivered', total: '$89.99' },
    { id: '#12344', date: '2024-01-10', status: 'Shipped', total: '$199.99' },
    { id: '#12343', date: '2024-01-05', status: 'Processing', total: '$49.99' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
            👋 Welcome back, {user.name}!
          </h1>
          <p className="text-xl text-gray-600">Here's what's happening with your account today.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium mb-2">{stat.title}</p>
                  <p className="text-4xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-4 rounded-2xl ${stat.color} text-white text-2xl shadow-lg`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="mr-3">📦</span> Recent Orders
              </h2>
              <div className="space-y-6">
                {recentOrders.map((order, index) => (
                  <div key={index} className="flex items-center justify-between p-6 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-colors duration-200">
                    <div>
                      <p className="font-bold text-gray-900 text-lg">{order.id}</p>
                      <p className="text-gray-600">{order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-purple-600 text-xl mb-2">{order.total}</p>
                      <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                        order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-2xl font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                View All Orders
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold text-text mb-6">❤️ Wishlist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                    <img
                      src={`https://via.placeholder.com/60x60?text=Item${item}`}
                      alt={`Wishlist item ${item}`}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-text">Product Name {item}</p>
                      <p className="text-primary font-bold text-sm">$29.99</p>
                    </div>
                    <button className="text-danger hover:text-red-700">🗑️</button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold text-text mb-6">👤 Account Information</h2>
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={user.avatar}
                  alt="Profile"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <p className="font-semibold text-text">{user.name}</p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                  <p className="text-xs text-gray-500">Member since {user.joinDate}</p>
                </div>
              </div>
              <button className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Edit Profile
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold text-text mb-6">⚙️ Account Settings</h2>
              <div className="space-y-3">
                <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  🔒 Change Password
                </button>
                <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  📍 Manage Addresses
                </button>
                <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  💳 Payment Methods
                </button>
                <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  🔔 Notification Preferences
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold text-text mb-6">🎁 Special Offers</h2>
              <div className="text-center">
                <div className="text-4xl mb-2">🎉</div>
                <p className="text-sm text-gray-600 mb-4">Get 10% off your next order with code WELCOME10</p>
                <button className="bg-accent text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-600 transition-colors">
                  Copy Code
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

export default Dashboard;