import React from 'react';
import './HeaderNav.scss';
import { NavLink } from 'react-router-dom';

interface HeaderNavProps {
  links: { name: string; path: string }[];
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ links }) => {
  return (
    <nav className="header-nav">
      <ul className="header-nav__list">
        {links.map((link, index) => (
          <li key={index} className="header-nav__item">
            <NavLink to={link.path} className="header-nav__link">
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
