import { useEffect, useState } from 'react';
import { getAllMeals } from '../../services/meals.mjs';
import MealCard from '../mealCard';

function Cuisine() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const allMeals = await getAllMeals();
      setMeals(allMeals);
      //console.log('cuisine', allMeals);
    }

    fetchData();
  }, []);

  return (
    <div className="center" style={{ height: '90%' }}>
      <label className="control-label h3" style={{ paddingTop: '110px' }}>
        Today's available menu, please click on your favourite one
      </label>

      <div className="row" style={{ gap: '10px', padding: '40px', width: '100%', height: '100%' }}>
        {meals.length > 0 &&
          meals.map((meal) => {
            return <MealCard key={meal.id} meal={meal}></MealCard>;
          })}
      </div>
    </div>
  );
}

export default Cuisine;
