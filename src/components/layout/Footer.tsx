import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">FurnishCart</h3>
            <p className="text-gray-400 text-sm">
              Your one-stop destination for premium furniture and home decor.
            </p>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Contact', 'Blog', 'Careers'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              {['FAQ', 'Shipping Policy', 'Returns', 'Track Order'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Connect With Us</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-md w-full"
              />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2024 FurnishCart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}