import React, { useState } from 'react';
import './CatalogFilters.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../../app/productsSlice';
import { FilterSearch } from '../FilterSearch';
import { FilterCategory } from '../FilterCategory';
import { FilterSortBy } from '../FilterSortBy';

export const CatalogFilters: React.FC = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('price-asc');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);

  const products = useSelector((state: any) => state.products.items);

  const uniqueCategories = Array.from(
    new Set(products.map((p: { category: string }) => p.category as string))
  );
  const categories: string[] = ['all', ...(uniqueCategories as string[])];

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    dispatch(setCategory(category));
  };

  return (
    <aside className="catalog__filters">
      <h2 className="catalog__filters-title">Фільтри</h2>

      <FilterSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <FilterCategory
        categories={categories}
        selectedCategory={selectedCategory}
        onChangeCategory={handleCategoryChange}
      />

      <FilterSortBy />
      {/* <div className="filter-sortby">
                <label htmlFor="filter-sortby__label">
                    Сортувати:
                </label>

                <select
                    id="filter-sortby__select"
                    className="filter-sortby__select"
                    defaultValue="price-asc"
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option
                        value="price-asc"
                        disabled={sortBy === 'price-asc'}
                        className="filter-sortby__option"
                    >
                        Ціна: від низької до високої
                    </option>

                    <option
                        value="price-desc"
                        disabled={sortBy === 'price-desc'}
                        className="filter-sortby__option"
                    >
                        Ціна: від високої до низької
                    </option>

                    <option
                        value="name-asc"
                        disabled={sortBy === 'name-asc'}
                        className="filter-sortby__option"
                    >
                        Назва: від A до Я
                    </option>

                    <option
                        value="name-desc"
                        disabled={sortBy === 'name-desc'}
                        className="filter-sortby__option"
                    >
                        Назва: від Я до A
                    </option>
                </select>
            </div> */}
    </aside>
  );
};
