import React from 'react';
import './FilterSearch.scss';
import type { SearchFilterProps } from '../../types';

export const FilterSearch: React.FC<SearchFilterProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div className="filter-search">
      <input
        type="text"
        placeholder="Пошук..."
        className="filter-search__input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};
