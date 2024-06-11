import React from 'react';
import NavBar from './NavBar';
import NutritionMeal from './NutritionMeal';
import TrendingSlider from './TrendingSlider';
import Slider from 'react-slick';
//Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  return (
    <>
      <div className="main">
        <NavBar />
        <NutritionMeal />
        <TrendingSlider />
      </div>
    </>
  );
};

export default Home;
