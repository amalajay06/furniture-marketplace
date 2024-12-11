export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  seller: string;
  rating: number;
  reviews: number;
  stock: number;
}

export interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'buyer' | 'seller';
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface Filter {
  category?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  rating?: number;
  sortBy?: 'price-asc' | 'price-desc' | 'rating' | 'newest';
}