export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  isNew?: boolean;
  oldPrice?: number;
  tone?: string;
  quantity?: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface SlickSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

export interface SearchFilterProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onChangeCategory: (category: string) => void;
}
