import React from 'react';
import './Home.scss';
import { HomeSlider } from '../../components/HomeSlider';

export const Home: React.FC = () => {
  return (
    <div className="home">
      <HomeSlider />
    </div>
  );
};
