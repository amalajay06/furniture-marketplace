import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transform Your Space with Elegant Furniture
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover a curated collection of premium furniture pieces that blend style, comfort, and functionality. 
              Shop from India's most trusted sellers.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Shop Now
              </button>
              <button className="text-sm font-semibold leading-6 text-gray-900 flex items-center">
                Sell Furniture <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Modern living room setup"
          />
        </div>
      </div>
    </div>
  );
}