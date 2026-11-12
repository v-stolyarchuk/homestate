import React from 'react';
import './Header.scss';
import { HeaderLogo } from '../HeaderLogo';
import { HeaderNav } from '../HeaderNav';
import { HeaderIcons } from '../HeaderIcons';

export const Header: React.FC = () => {
  const headerLinks = [
    { name: 'Home', path: '/' },
    { name: 'Catalog', path: '/catalog' },
    { name: 'Contacts', path: '/contacts' },
    { name: 'Cart', path: '/cart' },
  ];

  return (
    <header className="header">
      <HeaderLogo img="/logo.png" text="HomeState" />
      <HeaderNav links={headerLinks} />
      <HeaderIcons />
    </header>
  );
};
