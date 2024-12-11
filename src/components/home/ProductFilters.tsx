import React from 'react';
import { Slider } from 'lucide-react';
import type { Filter } from '../../types';
import { categories } from '../../constants/categories';

interface ProductFiltersProps {
  filters: Filter;
  onChange: (filters: Filter) => void;
}

export default function ProductFilters({ filters, onChange }: ProductFiltersProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Filters</h3>
      
      {/* Categories */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-900 mb-2">Category</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category.id} className="flex items-center">
              <input
                type="radio"
                name="category"
                value={category.id}
                checked={filters.category === category.id}
                onChange={(e) => onChange({ ...filters, category: e.target.value })}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="ml-2 text-sm text-gray-600">{category.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-900 mb-2">Price Range</h4>
        <div className="flex items-center space-x-4">
          <input
            type="number"
            placeholder="Min"
            value={filters.priceRange?.min || ''}
            onChange={(e) => onChange({
              ...filters,
              priceRange: {
                ...filters.priceRange,
                min: Number(e.target.value)
              }
            })}
            className="w-24 px-2 py-1 text-sm border rounded"
          />
          <span>to</span>
          <input
            type="number"
            placeholder="Max"
            value={filters.priceRange?.max || ''}
            onChange={(e) => onChange({
              ...filters,
              priceRange: {
                ...filters.priceRange,
                max: Number(e.target.value)
              }
            })}
            className="w-24 px-2 py-1 text-sm border rounded"
          />
        </div>
      </div>

      {/* Rating */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-900 mb-2">Minimum Rating</h4>
        <select
          value={filters.rating || ''}
          onChange={(e) => onChange({ ...filters, rating: Number(e.target.value) })}
          className="w-full px-2 py-1 text-sm border rounded"
        >
          <option value="">Any Rating</option>
          {[4, 3, 2, 1].map((rating) => (
            <option key={rating} value={rating}>
              {rating}+ Stars
            </option>
          ))}
        </select>
      </div>

      {/* Sort */}
      <div>
        <h4 className="text-sm font-medium text-gray-900 mb-2">Sort By</h4>
        <select
          value={filters.sortBy || ''}
          onChange={(e) => onChange({ ...filters, sortBy: e.target.value as Filter['sortBy'] })}
          className="w-full px-2 py-1 text-sm border rounded"
        >
          <option value="">Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
          <option value="newest">Newest First</option>
        </select>
      </div>
    </div>
  );
}