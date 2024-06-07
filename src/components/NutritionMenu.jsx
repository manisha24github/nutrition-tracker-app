import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NutritionMenu = () => {
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
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <>
      <div
        style={{
          height: '50vh',
          width: '90%',
          margin: auto,
        }}
      >
        <Slider {...settings}>
          {data.map((d) => {
            return (
              <div className="slider">
                <img src={d.strMealThumb} alt="" style={{ width: '20px', height: '10px' }} />
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default NutritionMenu;
