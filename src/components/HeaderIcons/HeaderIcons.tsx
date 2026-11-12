import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './HeaderIcons.scss';

export const HeaderIcons: React.FC = () => {
  const cartItems = useSelector((state: any) => state.cart.items) as any[];
  const favourites = useSelector(
    (state: any) => state.favourites.items
  ) as any[];
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const favouritesCount = favourites.length;

  return (
    <div className="header-icons">
      <Link
        to="/favourites"
        className="header-icons__icon header-icons__icon--favourite"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
        {favouritesCount > 0 && (
          <span className="header-icons__badge">{favouritesCount}</span>
        )}
      </Link>

      <Link to="/cart" className="header-icons__icon header-icons__icon--cart">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
        {cartCount > 0 && (
          <span className="header-icons__badge">{cartCount}</span>
        )}
      </Link>

      <button
        className="header-icons__icon header-icons__icon--mobile-menu"
        aria-label="Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </button>
    </div>
  );
};
