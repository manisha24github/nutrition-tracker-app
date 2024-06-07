import React from 'react';

<div className="meal">
  <div className="meal-img">
    {/* <h2>Chicken Soup (100 Cal)</h2>
  {/* <img className="meal-image" src="https://www.themealdb.com/images/media/meals/lx1kkj1593349302.jpg" /> */}

    <h2>
      {meals.strMeal}
      {meals.caleroies}Kcal for{grams} (100 Cal)
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
  <input type="number" className="inp" placeholder="Please Mentioned Quantity in Grams" />
  <button className="btn">Track this Food</button>

  <button className="btn">
    <Link to="/popular-slider">Nutrition Food Menu</Link>
  </button>
  <p>Please visit Our Nutrirtion Food Menu !!</p>
</div>;

{
  /* {
  meal!== null?(
      <Meals meals={Meals}/>
  ):null
} */
}
// export default Meal;
