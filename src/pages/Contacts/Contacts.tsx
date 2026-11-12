import React from 'react';
import './Contacts.scss';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

interface ServiceLink {
  name: string;
  url: string;
  description: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Facebook', url: 'https://facebook.com', icon: '📘' },
  { name: 'Instagram', url: 'https://instagram.com', icon: '📷' },
  { name: 'Twitter', url: 'https://twitter.com', icon: '🐦' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
  { name: 'YouTube', url: 'https://youtube.com', icon: '📺' },
];

const SERVICE_LINKS: ServiceLink[] = [
  {
    name: 'Доставка продуктів',
    url: 'https://delivery.example.com',
    description:
      'Швидка та надійна доставка продуктів з магазинів, ресторанів та супермаркетів по м. Київ та області.',
  },
  {
    name: 'Будівельних робіт майстер',
    url: 'https://installation.example.com',
    description:
      'Косметичний та капітальний ремонт, обслуговування комунікацій та інженерних систем.',
  },
  {
    name: 'Cleaning сервіс',
    url: 'https://repair.example.com',
    description:
      'Професійне прибирання житлових та офісних приміщень, оренда прибиральної техніки від 1 години.',
  },
  {
    name: 'Торти та десерти на замовлення',
    url: 'https://warranty.example.com',
    description:
      'Найсмачніші солодощі для вашого свята: торти, печиво, еклери, кекси та багато іншого.',
  },
  {
    name: 'Репетитор онлайн',
    url: 'https://support.example.com',
    description:
      'Допомога з вивченням англійської мови та програмування онлайн, індивідуальні заняття.',
  },
];

export const Contacts: React.FC = () => {
  return (
    <div className="contacts">
      <div className="contacts__container">
        <h1 className="contacts__title">Contact Us</h1>

        <div className="contacts__content">
          <div className="contacts__info">
            <section className="contacts__section">
              <h2 className="contacts__section-title">Address</h2>
              <p className="contacts__text">
                123 Main Street
                <br />
                Kyiv, Ukraine
                <br />
                01001
              </p>
            </section>

            <section className="contacts__section">
              <h2 className="contacts__section-title">Phone</h2>
              <a href="tel:+380441234567" className="contacts__link">
                +38 (044) 123-45-67
              </a>
            </section>

            <section className="contacts__section">
              <h2 className="contacts__section-title">Email</h2>

              <a href="mailto:info@example.com" className="contacts__link">
                info@example.com
              </a>
            </section>

            <section className="contacts__section">
              <h2 className="contacts__section-title">Social Media</h2>
              <ul className="contacts__social-list">
                {SOCIAL_LINKS.map((social) => (
                  <li key={social.name} className="contacts__social-item">
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contacts__social-link"
                      aria-label={`Visit our ${social.name} page`}
                    >
                      <span className="contacts__social-icon">
                        {social.icon}
                      </span>
                      <span className="contacts__social-name">
                        {social.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="contacts__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.123456789!2d30.5234!3d50.4501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDI3JzAwLjQiTiAzMMKwMzEnMjQuMiJF!5e0!3m2!1sen!2sua!4v1234567890"
              className="contacts__map-iframe"
              title="Our location on Google Maps"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <section className="contacts__services">
          <h2 className="contacts__section-title">Сервіси від наших друзів</h2>

          <ul className="contacts__services-list">
            {SERVICE_LINKS.map((service) => (
              <li key={service.name} className="contacts__services-item">
                <a
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contacts__services-link"
                >
                  <h3 className="contacts__services-name">{service.name}</h3>
                  <p className="contacts__services-description">
                    {service.description}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};
