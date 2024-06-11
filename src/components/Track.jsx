import React, { useState, useEffect } from 'react';
import { Link, json, useNavigate } from 'react-router-dom';
function Track() {
  const [meals, setMeals] = useState([]);
  const [grams, setGrams] = useState(100);

  // const [meals, setMeals] = useState[null];
  // useEffect(() => {
  //   console.log(meals);
  // });

  function searchMeals(event) {
    if (event.target.value.length !== 0) {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${event.target.value}`, {
        method: 'GET',
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === undefined) {
            setMeals(data.meals);
            console.log(data.meals);
          }
        })

        .catch((err) => {
          console.log(err);
        });
    } else {
      setMeals([]);
    }
  }
  return (
    <>
      <section className="container track-container">
        <h3>Welcome to Nutrition Tracking App!!</h3>
        <div className="search">
          <input className="search-inp" onChange={searchMeals} type="text" placeholder="Search Nutrition Food" />
          {meals.length !== 0 ? (
            <div className="search-results">
              {meals?.map((meals) => {
                return (
                  <p className="meals" key={meals.idMeal}>
                    {meals.strMeal}
                  </p>
                );
              })}
            </div>
          ) : null}
          {
            <button className="btn">
              <Link className="link" to="/home">
                Meals
              </Link>
            </button>
          }
        </div>
        <div className="meals">
          <div className="meals-img">
            <img
              className="meals-image"
              src={'https://www.themealdb.com/images/media/meals/lx1kkj1593349302.jpg'}
            ></img>
            <h2>
              {meals.strMeal}
              {meals.caleroies}Kcal for {grams}
            </h2>
          </div>

          <div className="nutrient">
            <p className="n-title">Protein</p>
            <p className="n-value">230g</p>
          </div>
          <div className="nutrient">
            <p className="n-title">Carbs</p>
            <p className="n-value">130g</p>
          </div>
          <div className="nutrient">
            <p className="n-title">Fat</p>
            <p className="n-value">100g</p>
          </div>
          <div className="nutrient">
            <p className="n-title">Fiber</p>
            <p className="n-value">230g</p>
          </div>
        </div>

        {
          <div>
            <input type="number" className="inp" placeholder="Please Mentioned Quantity in Grams" />
            <button className="btn">Track this Food</button>
          </div>
        }
      </section>
    </>
  );
}

export default Track;
