import { useNavigate } from 'react-router-dom';

function MealCard(props) {
  const navigate = useNavigate();

  const handleMealDetails = () => {
    navigate('/mealdetails', { state: { meal: props.meal } });

    //className="col-sm-6 col-lg-3 mb-2-6"
  };

  return (
    <div
      onClick={handleMealDetails}
      style={{
        cursor: 'pointer',
        border: '1px solid black',
        borderRadius: '16px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '300px',
        height: '350px',
      }}
    >
      <div className="card-wrapper mb-4">
        <div className="card-img">
          <img src={props.meal.image} alt="..." style={{ width: '250px', height: 'auto' }} />
        </div>
      </div>
      <div>
        <h4 className="h5">
          <a className="text-secondary">{props.meal.mealname}</a>
        </h4>
      </div>
    </div>
  );
}

export default MealCard;
