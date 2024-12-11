import { useState, useCallback } from 'react';
import type { Filter, Product } from '../types';

export function useFilters() {
  const [filters, setFilters] = useState<Filter>({});

  const applyFilters = useCallback((products: Product[]) => {
    return products.filter(product => {
      if (filters.category && product.category !== filters.category) {
        return false;
      }
      
      if (filters.priceRange) {
        const { min, max } = filters.priceRange;
        if (product.price < min || product.price > max) {
          return false;
        }
      }
      
      if (filters.rating && product.rating < filters.rating) {
        return false;
      }
      
      return true;
    }).sort((a, b) => {
      switch (filters.sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        default:
          return 0;
      }
    });
  }, [filters]);

  return {
    filters,
    setFilters,
    applyFilters
  };
}