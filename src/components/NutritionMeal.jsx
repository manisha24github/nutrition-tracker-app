import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
//Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NutritionMeal = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s');
      const data = await api.json();
      console.log(data.meals);
      setData(data.meals);
    };

    fetchData();
  }, []);

  var settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
  };

  return (
    <>
      <div
        style={{
          height: '56vh',
          width: '90%',
          backgroundColor: 'pink',
        }}
      >
        <slider {...settings}>
          {data.map((d) => {
            return (
              <Link to={`/${d.idMeal}`}>
                {/* key={id.idMeal} */}
                <div className="slider">
                  <img src={d.strMealThumb} alt="" style={{ width: '200px', height: '5rem' }} />
                </div>
              </Link>
            );
          })}
        </slider>
      </div>
    </>
  );
};
export default NutritionMeal;
