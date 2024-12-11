import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
}

export default function ProductCard({ id, name, price, rating, reviews, image }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-900">{name}</h3>
          <div className="mt-1 flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-500">
              {rating} ({reviews})
            </span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-gray-900">
            ₹{price.toLocaleString()}
          </p>
          <button
            onClick={() => addToCart(id)}
            className="mt-2 flex items-center text-sm text-indigo-600 hover:text-indigo-500"
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}