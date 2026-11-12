import React from 'react';
import { NavLink } from 'react-router-dom';
import './HeaderNavLink.scss';

export const HeaderNavLink: React.FC = () => {
  return (
    <li className="header__nav-item">
      <NavLink to="/" className="header__nav-link">
        Home
      </NavLink>
    </li>
  );
};
