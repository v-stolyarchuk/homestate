import React from 'react';
import ReactSlick from 'react-slick';
import './HomeSlider.scss';
import type { SlickSlide } from '../../types';

const Slider = (ReactSlick as any).default || ReactSlick;

const SLIDES: SlickSlide[] = [
  {
    id: 1,
    title: 'Summer Collection',
    subtitle: 'Discover our new arrivals',
    image: '/images/promo.png',
  },
  {
    id: 2,
    title: 'Modern Living',
    subtitle: 'Transform your space',
    image: '/images/promo.png',
  },
  {
    id: 3,
    title: 'Sustainable Design',
    subtitle: 'Eco-friendly home essentials',
    image: '/images/promo.png',
  },
];

export const HomeSlider: React.FC = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
    className: 'home__slider',
  };

  return (
    <Slider {...sliderSettings}>
      {SLIDES.map((slide) => (
        <div key={slide.id} className="home__slide">
          <div className="home__slide-content">
            <img
              src={slide.image}
              alt={slide.title}
              className="home__slide-image"
            />
            <div className="home__slide-text">
              <h2 className="home__slide-title">{slide.title}</h2>

              <p className="home__slide-subtitle">{slide.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};
