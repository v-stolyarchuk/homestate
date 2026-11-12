import './CatalogList.scss';
import { CatalogItem } from '../CatalogItem';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import type { Product } from '../../types';

export const CatalogList: React.FC = () => {
  const products = useSelector((state: any) => {
    return state.products.items as Product[];
  });

  const selectedCategory = useSelector(
    (state: any) => state.products.selectedCategory
  );

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <ul className={cn('catalog__list')}>
      {filteredProducts.map((product) => (
        <CatalogItem key={product.id} {...product} />
      ))}
    </ul>
  );
};
