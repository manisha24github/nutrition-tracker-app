import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import TrendingSlider from './TrendingSlider';
import { useParams } from 'react-router-dom';

const NutritionMenu = () => {
  const { idMeal } = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
      const data = await api.json();
      console.log(data.meals);
      setData(data.meals[0]);
    };

    fetchData();
  }, [idMeal]);

  return (
    <>
      <NavBar />
      <div
        style={{
          width: '90%',
          margin: 0,
          textAlign: 'center',
        }}
      >
        <h1>{data.strMeal}</h1>
        <div
          style={{
            display: 'flex',
          }}
        >
          <div className="img">
            <img src={'data.strMealThumb'} alt="" style={{ width: '10rem' }} />
          </div>
          <div className="content">
            <button className="btn">Ingredents</button>
            <button className="btn">Instruction</button>
          </div>
        </div>
        <TrendingSlider />
      </div>
    </>
  );
};

export default NutritionMenu;
