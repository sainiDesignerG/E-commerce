import React, { useState } from 'react';
import { IconHome, IconPackage, IconUser, IconSettings, IconHeart, IconLogout, IconMenu2, IconX, IconDashboard, IconShoppingBag, IconBell } from '@tabler/icons-react';

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: IconDashboard, href: '/dashboard' },
    { id: 'orders', label: 'My Orders', icon: IconPackage, href: '/dashboard/orders' },
    { id: 'wishlist', label: 'Wishlist', icon: IconHeart, href: '/dashboard/wishlist' },
    { id: 'profile', label: 'Profile', icon: IconUser, href: '/dashboard/profile' },
    { id: 'settings', label: 'Settings', icon: IconSettings, href: '/dashboard/settings' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Header */}
      <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-[999]">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden text-white hover:text-cyan-400 transition-colors"
              >
                {sidebarOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
              </button>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent flex items-center">
                <IconDashboard className="mr-3 text-cyan-400" size={28} />
                Fitness Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative text-gray-300 hover:text-white transition-colors">
                <IconBell size={20} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
              </button>
              <div className="flex items-center space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1506629905607-c52b1a5e5b3a?w=32&h=32&fit=crop&crop=face"
                  alt="Profile"
                  className="w-8 h-8 rounded-full border-2 border-cyan-400"
                />
                <span className="text-white font-medium hidden md:block">Alex Fitness</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-gray-800/50 backdrop-blur-sm border-r border-gray-700 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}>
          <div className="flex flex-col h-full">
            {/* User Profile Section */}
            <div className="p-6 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=60&h=60&fit=crop"
                  alt="Profile"
                  className="w-12 h-12 rounded-full border-2 border-cyan-400"
                />
                <div>
                  <p className="text-white font-semibold">Alex Fitness</p>
                  <p className="text-cyan-400 text-sm">Premium Member</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4">
              <ul className="space-y-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveTab(item.id);
                          setSidebarOpen(false);
                        }}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                          isActive
                            ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-400'
                            : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                        }`}
                      >
                        <Icon size={20} className={isActive ? 'text-cyan-400' : 'text-gray-400 group-hover:text-white'} />
                        <span className="font-medium">{item.label}</span>
                        {isActive && (
                          <div className="ml-auto w-2 h-2 bg-cyan-400 rounded-full"></div>
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Logout Button */}
            <div className="p-4 border-t border-gray-700">
              <button className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all duration-200 w-full">
                <IconLogout size={20} />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-0">
          <div className="p-6 lg:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;