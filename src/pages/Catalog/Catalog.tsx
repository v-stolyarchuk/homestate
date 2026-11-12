import React from 'react';
import './Catalog.scss';
import { CatalogList } from '../../components/CatalogList';
import { CatalogFilters } from '../../components/CatalogFilters';

export const Catalog: React.FC = () => {
  return (
    <div className="catalog">
      <CatalogFilters />
      <CatalogList />
    </div>
  );
};
