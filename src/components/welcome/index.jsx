import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="center">
      <h2>Welcome to Nutrition Tracker and Fitness App</h2>
      <button
        data-mdb-button-init
        data-mdb-ripple-init
        className="btn btn-primary btn-block mb-4"
        onClick={() => {
          navigate('/login');
        }}
      >
        Start Today!!
      </button>
    </div>
  );
}

export default Welcome;
