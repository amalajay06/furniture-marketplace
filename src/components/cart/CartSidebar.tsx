import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { featuredProducts } from '../../constants/products';

export default function CartSidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { items, removeFromCart, updateQuantity } = useCart();
  
  const cartItems = items.map(item => ({
    ...item,
    product: featuredProducts.find(p => p.id === item.productId)!
  }));

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose} />
      
      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md">
          <div className="flex h-full flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between px-4 py-6">
              <h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                <X className="h-6 w-6" />
              </button>
            </div>

            {cartItems.length === 0 ? (
              <div className="flex-1 px-4 py-6 sm:px-6">
                <div className="flex flex-col items-center justify-center h-full">
                  <ShoppingBag className="h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-gray-500">Your cart is empty</p>
                </div>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="space-y-8">
                    {cartItems.map(({ product, quantity }) => (
                      <div key={product.id} className="flex items-center">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-20 w-20 object-cover rounded"
                        />
                        <div className="ml-4 flex-1">
                          <h3 className="text-sm font-medium text-gray-900">
                            {product.name}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                            ₹{product.price.toLocaleString()}
                          </p>
                          <div className="mt-2 flex items-center">
                            <button
                              onClick={() => updateQuantity(product.id, quantity - 1)}
                              className="p-1 text-gray-400 hover:text-gray-500"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="mx-2 text-gray-600">{quantity}</span>
                            <button
                              onClick={() => updateQuantity(product.id, quantity + 1)}
                              className="p-1 text-gray-400 hover:text-gray-500"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(product.id)}
                          className="ml-4 text-gray-400 hover:text-gray-500"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>₹{total.toLocaleString()}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div className="mt-6">
                    <a
                      href="/checkout"
                      className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                      Proceed to Checkout
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}