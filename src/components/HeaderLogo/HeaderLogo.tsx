import React from 'react';
import './HeaderLogo.scss';
import { NavLink } from 'react-router-dom';

interface HeaderLogoProps {
  img: string;
  text: string;
}

export const HeaderLogo: React.FC<HeaderLogoProps> = ({ img, text }) => {
  return (
    <NavLink to="/" className="header__logo">
      <img src={`/images/${img}`} alt="Logo" className="header__logo-img" />

      <span className="header__logo-text">{text}</span>
    </NavLink>
  );
};
