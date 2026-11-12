import React from 'react';
import './Footer.scss';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__title">Про нас</h3>
            <p className="footer__text">
              Ми пропонуємо широкий асортимент товарів для дому, краси та
              догляду. Якісні продукти за доступними цінами.
            </p>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Контакти</h3>
            <ul className="footer__list">
              <li className="footer__list-item">
                <a href="tel:+380441234567" className="footer__link">
                  +38 (044) 123-45-67
                </a>
              </li>
              <li className="footer__list-item">
                <a href="mailto:info@example.com" className="footer__link">
                  info@example.com
                </a>
              </li>
              <li className="footer__list-item">
                <span className="footer__text">Київ, вул. Головна, 123</span>
              </li>
            </ul>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Інформація</h3>
            <ul className="footer__list">
              <li className="footer__list-item">
                <a href="/about" className="footer__link">
                  Про компанію
                </a>
              </li>
              <li className="footer__list-item">
                <a href="/delivery" className="footer__link">
                  Доставка та оплата
                </a>
              </li>
              <li className="footer__list-item">
                <a href="/returns" className="footer__link">
                  Повернення та обмін
                </a>
              </li>
              <li className="footer__list-item">
                <a href="/privacy" className="footer__link">
                  Політика конфіденційності
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Соціальні мережі</h3>
            <div className="footer__social">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Instagram"
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
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2024 HomeStore. Всі права захищені.
          </p>
        </div>
      </div>
    </footer>
  );
};
