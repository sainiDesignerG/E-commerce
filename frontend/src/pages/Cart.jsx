import React from 'react';
import { IconMinus, IconPlus, IconTrash } from '@tabler/icons-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 89,
      originalPrice: 129,
      quantity: 2,
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjUwIiB5PSI1MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzlCOUI5QSIgZm9udC1zaXplPSIxNCIgZm9udC1mYW1pbHk9IkFyaWFsIj5IZWFkcGhvbmVzPC90ZXh0Pgo8L3N2Zz4=',
      description: 'Noise-cancelling wireless headphones'
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      price: 199,
      originalPrice: 249,
      quantity: 1,
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjUwIiB5PSI1MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzlCOUI5QSIgZm9udC1zaXplPSIxNCIgZm9udC1mYW1pbHk9IkFyaWFsIj5XYXRjaDwvdGV4dD4KPC9zdmc+',
      description: 'Advanced fitness tracker with GPS'
    },
    {
      id: 3,
      name: 'Organic Cotton T-Shirt',
      price: 29,
      originalPrice: 39,
      quantity: 3,
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjUwIiB5PSI1MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzlCOUI5QSIgZm9udC1zaXplPSIxNCIgZm9udC1mYW1pbHk9IkFyaWFsIj5ULVNoaXJ0PC90ZXh0Pgo8L3N2Zz4=',
      description: 'Comfortable organic cotton t-shirt'
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 10;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">🛒 Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-semibold text-white mb-4">Your cart is empty</h2>
            <p className="text-gray-400 mb-8">Add some products to get started!</p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-gray-700">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <span className="text-lg font-bold text-cyan-400">${item.price}</span>
                        <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center bg-gray-700 border border-gray-600 rounded-lg">
                        <button className="px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-600 rounded-l-lg transition-colors">
                          <IconMinus size={16} />
                        </button>
                        <span className="px-4 py-2 text-white border-x border-gray-600">{item.quantity}</span>
                        <button className="px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-600 rounded-r-lg transition-colors">
                          <IconPlus size={16} />
                        </button>
                      </div>
                      <button className="text-red-400 hover:text-red-300 p-2 rounded-lg hover:bg-red-500/20 transition-colors">
                        <IconTrash size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-gray-700 h-fit">
              <h2 className="text-xl font-semibold text-white mb-6">Order Summary</h2>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Subtotal ({cartItems.length} items)</span>
                  <span className="font-semibold text-white">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Shipping</span>
                  <span className="font-semibold text-white">{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Tax</span>
                  <span className="font-semibold text-white">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-600 pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-white">Total</span>
                    <span className="text-cyan-400">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                  Proceed to Checkout
                </button>
                <button className="w-full border-2 border-cyan-500 text-cyan-400 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300">
                  Continue Shopping
                </button>
              </div>

              <div className="mt-6 p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                <div className="flex items-center text-sm text-gray-300">
                  <span className="mr-2">🔒</span>
                  <span>Secure checkout with SSL encryption</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;