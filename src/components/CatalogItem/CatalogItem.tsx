import './CatalogItem.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decrementQuantity } from '../../app/cartSlice';
import { toggleFavourite } from '../../app/favouritesSlice';
import type { Product, CartItem } from '../../types';

export const CatalogItem: React.FC<Product> = ({
  id,
  image,
  name,
  category,
  price,
  oldPrice,
  isNew,
}) => {
  const dispatch = useDispatch();
  const favourites = useSelector(
    (state: any) => state.favourites.items
  ) as Product[];
  const cartItems = useSelector((state: any) => state.cart.items) as CartItem[];

  const isFavourite = favourites.some((item) => item.id === id);
  const cartItem = cartItems.find((item) => item.id === id);
  const quantity = cartItem?.quantity || 0;

  const handleAddToCart = () => {
    dispatch(addToCart({ id, image, name, category, price, oldPrice, isNew }));
  };

  const handleIncrement = () => {
    dispatch(addToCart({ id, image, name, category, price, oldPrice, isNew }));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity(id));
  };

  const handleToggleFavourite = () => {
    dispatch(
      toggleFavourite({ id, image, name, category, price, oldPrice, isNew })
    );
  };

  const discountPercentage =
    oldPrice && oldPrice > price
      ? Math.round((1 - price / oldPrice) * 100)
      : null;

  return (
    <li className="catalog__item">
      <article className="catalog__item-card">
        <div className="catalog__item-media">
          <img
            src={image}
            alt={name}
            className="catalog__item-image"
            loading="lazy"
          />

          <button
            type="button"
            className={`catalog__item-favourite ${
              isFavourite ? 'catalog__item-favourite--active' : ''
            }`}
            onClick={handleToggleFavourite}
            aria-label={
              isFavourite ? 'Remove from favourites' : 'Add to favourites'
            }
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={isFavourite ? 'currentColor' : 'none'}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>

          <div className="catalog__item-badges">
            {isNew && (
              <span className="catalog__item-badge catalog__item-badge--new">
                New
              </span>
            )}

            {discountPercentage && (
              <span className="catalog__item-badge catalog__item-badge--sale">
                -{discountPercentage}%
              </span>
            )}
          </div>
        </div>

        <div className="catalog__item-info">
          <h3 className="catalog__item-title">{name}</h3>

          <p className="catalog__item-category">{category}</p>

          <div className="catalog__item-footer">
            <div className="catalog__item-price">
              <span className="catalog__item-price-current">{price} ₴</span>
              {oldPrice && (
                <s className="catalog__item-price-old">{oldPrice} ₴</s>
              )}
            </div>

            {quantity > 0 ? (
              <div className="catalog__item-actions">
                <button
                  type="button"
                  className="catalog__item-action-button"
                  onClick={handleDecrement}
                  aria-label="Зменшити кількість"
                >
                  −
                </button>
                <span className="catalog__item-quantity">{quantity}</span>
                <button
                  type="button"
                  className="catalog__item-action-button"
                  onClick={handleIncrement}
                  aria-label="Збільшити кількість"
                >
                  +
                </button>
              </div>
            ) : (
              <button
                type="button"
                className="catalog__item-button"
                onClick={handleAddToCart}
                aria-label={`Add ${name} to cart`}
              >
                Додати в кошик
              </button>
            )}
          </div>
        </div>
      </article>
    </li>
  );
};
