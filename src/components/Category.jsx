import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';
import TrendingSlider from './TrendingSlider';

const Category = () => {
  const { name } = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`);
      const data = await api.json();
      console.log(data);
      //   console.log(data.meals);
      //   setData(data.meals[0]);
    };

    fetchData();
  }, [name]);

  return (
    <>
      <NavBar />
      <div
        style={{
          width: '90%',
          margin: 0,
          display: 'grid',
          gridGap: '1rem',
          marginTop: '2rem',
        }}
      >
        {data.map((d) => {
          return (
            <div
              style={{
                textAlign: 'center',
              }}
            >
              <div className="img">
                <img src={d.strMealThumb} alt="" style={{ width: '13rem' }} />
              </div>
              <h3>{d.strMeal}</h3>
            </div>
          );
        })}
      </div>
      <TrendingSlider />
    </>
  );
};

export default Category;
