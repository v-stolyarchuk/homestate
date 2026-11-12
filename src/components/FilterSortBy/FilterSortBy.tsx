import React from 'react';
import './FilterSortBy.scss';

export const FilterSortBy: React.FC = () => {
  return (
    <div className="filter-sortby">
      <label htmlFor="filter-sortby__label">Сортувати:</label>

      <select
        id="filter-sortby__select"
        className="filter-sortby__select"
        defaultValue="price-asc"
      >
        <option value="price-asc" disabled className="filter-sortby__option">
          Ціна: від низької до високої
        </option>

        <option value="price-desc" disabled className="filter-sortby__option">
          Ціна: від високої до низької
        </option>

        <option value="name-asc" disabled className="filter-sortby__option">
          Назва: від A до Я
        </option>

        <option value="name-desc" disabled className="filter-sortby__option">
          Назва: від Я до A
        </option>
      </select>
    </div>
  );
};
