import React from 'react';

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        </div>
      </header>
      <div className="flex">
        <aside className="w-64 bg-white shadow min-h-screen">
          <nav className="p-4">
            <a href="/dashboard" className="block py-2 px-4 hover:bg-gray-100">Overview</a>
            <a href="/dashboard/orders" className="block py-2 px-4 hover:bg-gray-100">Orders</a>
            <a href="/dashboard/profile" className="block py-2 px-4 hover:bg-gray-100">Profile</a>
          </nav>
        </aside>
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;