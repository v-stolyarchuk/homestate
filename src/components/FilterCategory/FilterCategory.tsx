import React from 'react';
import './FilterCategory.scss';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import type { CategoryFilterProps, Product } from '../../types';

export const FilterCategory: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onChangeCategory,
}) => {
  const products = useSelector(
    (state: { products: { items: Product[] } }) => state.products.items
  );
  const uniqueCategories = Array.from(
    new Set(products.map((p: Product) => p.category as string))
  );
  const categoriesList: string[] = ['all', ...uniqueCategories];

  return (
    <div className="filter-category">
      <ul className="filter-category__list">
        {categoriesList.map((category: string) => (
          <li key={category} className="filter-category__item">
            <button
              className={cn('filter-category__link', {
                'filter-category__link--active': selectedCategory === category,
              })}
              onClick={() => {
                onChangeCategory(category);
              }}
            >
              {category === 'all' ? 'Усі товари' : category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
