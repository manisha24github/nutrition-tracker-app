import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Register from './components/Register';
import Login from './components/Login';
import Notfound from './components/Notfound';
import Track from './components/Track';
import Home from './components/Home';
import NavBar from './components/NavBar';
import NutritionMeal from './components/NutritionMeal';
import TrendingSlider from './components/TrendingSlider';
import NutritionMenu from './components/NutritionMenu';
import Category from './components/Category';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/track" element={<Track />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/home" element={<Home />} />
          <Route path="/nav-bar" element={<NavBar />} />
          <Route path="/nutrition-meal" element={<NutritionMeal />} />
          <Route path="/trending-slider" element={<TrendingSlider />} />
          <Route path="/:idMeal" element={<NutritionMenu />} />
          <Route path="/category/:name" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
