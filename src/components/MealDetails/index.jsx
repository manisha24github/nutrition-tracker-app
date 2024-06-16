import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { addTracker } from '../../services/tracker.mjs';

function MealDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const [origionalMeal, setOrigionalMeal] = useState({});
  const [updatedMeal, setUpdatedMeal] = useState({});
  const [quantity, setQunatity] = useState(1);
  const [showTrackerModal, setShowTrackerModal] = useState(false);

  useEffect(() => {
    setOrigionalMeal(location.state.meal);
    setUpdatedMeal(location.state.meal);
  }, []);

  function calculateMealNutrients(event) {
    event.preventDefault();
    if (event.target.mealQuanity.value > 0) {
      setQunatity(Number(event.target.mealQuanity.value));
      let newMealNutrients = {};
      newMealNutrients.protein = Number(origionalMeal.protein * quantity).toFixed(2);
      newMealNutrients.carbohydrates = Number(origionalMeal.carbohydrates * quantity).toFixed(2);
      newMealNutrients.fiber = Number(origionalMeal.fiber * quantity).toFixed(2);
      newMealNutrients.fat = Number(origionalMeal.fat * quantity).toFixed(2);
      newMealNutrients.calories = Number(origionalMeal.calories * quantity).toFixed(2);
      newMealNutrients.image = origionalMeal.image;
      newMealNutrients.mealname = origionalMeal.mealname;
      setUpdatedMeal(newMealNutrients);
    }
  }

  const handleTracker = async (event) => {
    event.preventDefault();
    let track = {
      mealname: updatedMeal.mealname,
      carbohydrates: updatedMeal.carbohydrates,
      fiber: updatedMeal.fiber,
      fat: updatedMeal.fat,
      calories: updatedMeal.calories,
      protein: updatedMeal.protein,
      quantity: quantity,
      date: formatDate(),
    };
    await addTracker(track);
    setShowTrackerModal(true);
  };

  const formatDate = () => {
    var d = new Date();
    return [('0' + d.getDate()).slice(-2), ('0' + (d.getMonth() + 1)).slice(-2), d.getFullYear()].join('/');
  };

  return (
    <>
      <label className="control-label h3" style={{ paddingTop: '40px', paddingLeft: '40px' }}>
        You have selected: {updatedMeal.mealname}
      </label>
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%', padding: '40px' }}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '50px', width: '60%' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '40%',
              border: '1px solid black',
              borderRadius: '16px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img src={updatedMeal.image} alt="..." style={{ width: '250px', height: 'auto' }} />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '80%',
              gap: '10px',
            }}
          >
            <div className="control-group">
              <label className="control-label" style={{ paddingRight: '10px' }}>
                Carbohydrate:
              </label>
              <label className="control-label static-text">{updatedMeal.carbohydrates} g</label>
            </div>
            <div className="control-group">
              <label className="control-label" style={{ paddingRight: '10px' }}>
                Fat:
              </label>
              <label className="control-label static-text">{updatedMeal.fat} g</label>
            </div>
            <div className="control-group">
              <label className="control-label" style={{ paddingRight: '10px' }}>
                Fiber:
              </label>
              <label className="control-label static-text">{updatedMeal.fiber} g</label>
            </div>
            <div className="control-group">
              <label className="control-label" style={{ paddingRight: '10px' }}>
                Protien:
              </label>
              <label className="control-label static-text">{updatedMeal.protein} g</label>
            </div>
            <div className="control-group">
              <label className="control-label" style={{ paddingRight: '10px' }}>
                Calorie:
              </label>
              <label className="control-label static-text">{updatedMeal.calories} kcal</label>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '30%' }}>
          <form onSubmit={calculateMealNutrients}>
            <div data-mdb-input-init className="form-outline mb-4">
              <label className="form-label" htmlFor="mealQuanity"></label>
              <input type="number" min="1" id="mealQuanity" className="form-control" placeholder="Quantity in Grams" />
            </div>

            <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">
              Calculate
            </button>
          </form>

          <button
            data-mdb-button-init
            data-mdb-ripple-init
            className="btn btn-primary btn-block mb-4"
            onClick={handleTracker}
          >
            Track this Food
          </button>
        </div>
      </div>

      <div
        className={`modal ${showTrackerModal ? 'show' : ''}`}
        style={{
          display: showTrackerModal ? 'block' : 'none',
          background: 'rgba(0, 0, 0, .8)',
        }}
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden={showTrackerModal ? undefined : 'true'}
        aria-modal={showTrackerModal ? 'true' : undefined}
        role={showTrackerModal ? 'dialog' : undefined}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Confirmation
              </h5>
            </div>
            <div className="modal-body">Your currect selected meal has been added to Tracker</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={() => setShowTrackerModal(false)}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={() => navigate('/tracker')}
              >
                Go to Tracker
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MealDetails;
