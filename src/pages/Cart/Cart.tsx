import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrementQuantity,
  removeFromCart,
  clearCart,
  addToCart,
} from '../../app/cartSlice';
import type { CartItem } from '../../types';
import './Cart.scss';

export const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.items) as CartItem[];

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleDecrement = (id: number) => {
    dispatch(decrementQuantity(id));
  };

  const handleIncrement = (item: CartItem) => {
    dispatch(addToCart(item));
  };

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const formatPrice = (value: number) =>
    new Intl.NumberFormat('uk-UA', {
      style: 'currency',
      currency: 'UAH',
      maximumFractionDigits: 0,
    }).format(value);

  if (cartItems.length === 0) {
    return (
      <div className="cart">
        <div className="cart__container">
          <h1 className="cart__title">Кошик</h1>
          <div className="cart__empty">
            <p className="cart__empty-text">Ваш кошик порожній</p>
            <p className="cart__empty-subtitle">
              Додайте товари, щоб оформити замовлення
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="cart__container">
        <h1 className="cart__title">Кошик</h1>

        <div className="cart__content">
          <div className="cart__items">
            {cartItems.map((item) => (
              <article key={item.id} className="cart__item">
                <div className="cart__item-media">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart__item-image"
                    loading="lazy"
                  />
                </div>

                <div className="cart__item-info">
                  <h3 className="cart__item-name">{item.name}</h3>
                  <p className="cart__item-category">{item.category}</p>
                  <p className="cart__item-price">{formatPrice(item.price)}</p>
                </div>

                <div className="cart__item-actions">
                  <div className="cart__item-quantity">
                    <button
                      type="button"
                      className="cart__quantity-button"
                      onClick={() => handleDecrement(item.id)}
                      aria-label="Зменшити кількість"
                    >
                      −
                    </button>
                    <span className="cart__quantity-value">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      className="cart__quantity-button"
                      onClick={() => handleIncrement(item)}
                      aria-label="Збільшити кількість"
                    >
                      +
                    </button>
                  </div>

                  <div className="cart__item-total">
                    {formatPrice(item.price * item.quantity)}
                  </div>

                  <button
                    type="button"
                    className="cart__remove-button"
                    onClick={() => handleRemove(item.id)}
                    aria-label="Видалити товар"
                  >
                    Видалити
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="cart__summary">
            <div className="cart__summary-card">
              <h2 className="cart__summary-title">Підсумок</h2>

              <div className="cart__summary-row">
                <span className="cart__summary-label">
                  Товарів ({cartItems.length})
                </span>
                <span className="cart__summary-value">
                  {formatPrice(totalPrice)}
                </span>
              </div>

              <div className="cart__summary-row cart__summary-row--total">
                <span className="cart__summary-label">Разом</span>
                <span className="cart__summary-value cart__summary-value--total">
                  {formatPrice(totalPrice)}
                </span>
              </div>

              <button
                type="button"
                className="cart__checkout-button"
                aria-label="Оформити замовлення"
              >
                Оформити замовлення
              </button>

              <button
                type="button"
                className="cart__clear-button"
                onClick={handleClearCart}
                aria-label="Очистити кошик"
              >
                Очистити кошик
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
