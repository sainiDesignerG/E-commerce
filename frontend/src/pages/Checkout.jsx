import React, { useState } from 'react';
import { IconMapPin, IconCreditCard, IconClipboardList, IconLock, IconTruck, IconShield, IconCheck } from '@tabler/icons-react';

const Checkout = () => {
  const [selectedShipping, setSelectedShipping] = useState('standard');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8 flex items-center">
          <IconCreditCard className="mr-3 text-cyan-400" size={32} />
          Secure Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                <IconMapPin className="mr-3 text-cyan-400" size={24} />
                Shipping Information
              </h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">First Name</label>
                    <input
                      type="text"
                      placeholder="Alex"
                      className="w-full bg-gray-700/50 border border-gray-600 text-white p-3 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Last Name</label>
                    <input
                      type="text"
                      placeholder="Fitness"
                      className="w-full bg-gray-700/50 border border-gray-600 text-white p-3 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 placeholder-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="alex@fitnesshub.com"
                    className="w-full bg-gray-700/50 border border-gray-600 text-white p-3 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="w-full bg-gray-700/50 border border-gray-600 text-white p-3 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Street Address</label>
                  <input
                    type="text"
                    placeholder="123 Fitness Avenue"
                    className="w-full bg-gray-700/50 border border-gray-600 text-white p-3 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 placeholder-gray-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">City</label>
                    <input
                      type="text"
                      placeholder="Los Angeles"
                      className="w-full bg-gray-700/50 border border-gray-600 text-white p-3 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">ZIP Code</label>
                    <input
                      type="text"
                      placeholder="90210"
                      className="w-full bg-gray-700/50 border border-gray-600 text-white p-3 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 placeholder-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Country</label>
                  <select className="w-full bg-gray-700/50 border border-gray-600 text-white p-3 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400">
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                  </select>
                </div>
              </form>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                <IconTruck className="mr-3 text-cyan-400" size={24} />
                Shipping Method
              </h2>
              <div className="space-y-3">
                <label className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                  selectedShipping === 'standard' 
                    ? 'border-cyan-400 bg-cyan-400/10' 
                    : 'border-gray-600 hover:border-gray-500'
                }`}>
                  <input 
                    type="radio" 
                    name="shipping" 
                    value="standard"
                    checked={selectedShipping === 'standard'}
                    onChange={(e) => setSelectedShipping(e.target.value)}
                    className="mr-3 text-cyan-400" 
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-white">Standard Shipping</div>
                    <div className="text-sm text-gray-400">5-7 business days</div>
                  </div>
                  <div className="font-semibold text-cyan-400">$10.00</div>
                </label>
                <label className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                  selectedShipping === 'express' 
                    ? 'border-cyan-400 bg-cyan-400/10' 
                    : 'border-gray-600 hover:border-gray-500'
                }`}>
                  <input 
                    type="radio" 
                    name="shipping" 
                    value="express"
                    checked={selectedShipping === 'express'}
                    onChange={(e) => setSelectedShipping(e.target.value)}
                    className="mr-3 text-cyan-400" 
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-white">Express Shipping</div>
                    <div className="text-sm text-gray-400">2-3 business days</div>
                  </div>
                  <div className="font-semibold text-cyan-400">$25.00</div>
                </label>
                <label className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                  selectedShipping === 'overnight' 
                    ? 'border-cyan-400 bg-cyan-400/10' 
                    : 'border-gray-600 hover:border-gray-500'
                }`}>
                  <input 
                    type="radio" 
                    name="shipping" 
                    value="overnight"
                    checked={selectedShipping === 'overnight'}
                    onChange={(e) => setSelectedShipping(e.target.value)}
                    className="mr-3 text-cyan-400" 
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-white">Overnight Shipping</div>
                    <div className="text-sm text-gray-400">Next business day</div>
                  </div>
                  <div className="font-semibold text-cyan-400">$50.00</div>
                </label>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                <IconCreditCard className="mr-3 text-cyan-400" size={24} />
                Payment Information
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Card Number</label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full bg-gray-700/50 border border-gray-600 text-white p-3 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 placeholder-gray-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Expiry Date</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full bg-gray-700/50 border border-gray-600 text-white p-3 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">CVV</label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full bg-gray-700/50 border border-gray-600 text-white p-3 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 placeholder-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Cardholder Name</label>
                  <input
                    type="text"
                    placeholder="Alex Fitness"
                    className="w-full bg-gray-700/50 border border-gray-600 text-white p-3 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 placeholder-gray-400"
                  />
                </div>

                <div className="flex items-center">
                  <input type="checkbox" id="save-card" className="mr-2 text-cyan-400" />
                  <label htmlFor="save-card" className="text-sm text-gray-300">Save card for future purchases</label>
                </div>
              </form>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                <IconClipboardList className="mr-3 text-cyan-400" size={24} />
                Order Summary
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal (3 items)</span>
                  <span>$254.97</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Shipping</span>
                  <span>$10.00</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Tax</span>
                  <span>$21.25</span>
                </div>
                <div className="border-t border-gray-600 pt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span className="text-white">Total</span>
                    <span className="text-cyan-400">$286.22</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/25 mt-6 flex items-center justify-center space-x-2">
                <IconCheck size={20} />
                <span>Place Order - $286.22</span>
              </button>

              <div className="mt-6 space-y-3">
                <div className="p-4 bg-gray-700/30 rounded-lg border border-gray-600">
                  <div className="flex items-center text-sm text-gray-300">
                    <IconLock className="mr-2 text-cyan-400" size={16} />
                    <span>Your payment information is secure and encrypted</span>
                  </div>
                </div>
                <div className="p-4 bg-gray-700/30 rounded-lg border border-gray-600">
                  <div className="flex items-center text-sm text-gray-300">
                    <IconShield className="mr-2 text-green-400" size={16} />
                    <span>30-day money back guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;